import React from 'react'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      );
}
