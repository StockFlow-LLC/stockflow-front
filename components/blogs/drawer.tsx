import React, { useState } from 'react';

const Drawer = ({ children } : any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Open Drawer
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`fixed bottom-0 left-0 right-0 h-1/2 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="p-4 h-full overflow-y-auto">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            Close
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Drawer;
