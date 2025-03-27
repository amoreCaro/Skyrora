import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";

const DynamicGrid = ({ columns, children }) => {
    return (
        <DefaultSection>
            <div
                className="grid gap-4"
                style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
                {children}
            </div>
        </DefaultSection>
    );
};

export default DynamicGrid;
