<?php

namespace App\Http\Controllers\Api;

use App\Models\Department;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DepartmentController extends Controller
{
    // GET /api/departments
    public function index()
    {
        return response()->json(Department::all());
    }

    // POST /api/departments
    public function store(Request $request)
    {
        $validated = $request->validate([
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:5120',
            'name' => 'required|string|max:255|unique:departments,name',
            'alias' => 'required|string|max:55',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('department_images', 'public');
            $validated['image'] = $path;  // use 'image' here
        }

        $department = Department::create($validated);

        return response()->json($department, 201);
    }

    // PUT /api/departments/{id}
    public function update(Request $request, $id)
    {
        $department = Department::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:departments,name,' . $id,
            'alias' => 'required|string|max:55',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:5120',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($department->image && Storage::disk('public')->exists($department->image)) {
                Storage::disk('public')->delete($department->image);
            }

            // Store new image
            $path = $request->file('image')->store('department_images', 'public');
            $validated['image'] = $path;  // keep 'image' key
        }

        $department->update($validated);

        return response()->json($department);
    }

    // DELETE /api/departments/{id}
    public function destroy($id)
    {
        $department = Department::findOrFail($id);

        // Delete image file when deleting department
        if ($department->image && Storage::disk('public')->exists($department->image)) {
            Storage::disk('public')->delete($department->image);
        }

        $department->delete();

        return response()->json(null, 204);
    }
}
