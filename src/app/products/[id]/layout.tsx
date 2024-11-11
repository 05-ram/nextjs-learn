import React from "react";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <h1>Fetaured Product</h1>
        </div>
    )
}