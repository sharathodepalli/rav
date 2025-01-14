import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FileUpload({ onChange }: FileUploadProps) {
  return (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary-500 transition-colors">
      <div className="space-y-1 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label htmlFor="documents" className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500">
            <span>Upload files</span>
            <input
              id="documents"
              name="documents"
              type="file"
              multiple
              className="sr-only"
              onChange={onChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">
          PDF, DOC, DOCX or TXT up to 10MB
        </p>
      </div>
    </div>
  );
}