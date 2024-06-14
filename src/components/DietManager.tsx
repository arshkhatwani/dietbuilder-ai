"use client";

import { generateDiet } from "@/app/diets/actions";
import DietInput, { DietForm } from "./DietInput";
import DietOutput from "./DietOutput";

function DietManager() {
    const dietSubmit = (data: DietForm) => {
        console.log("rec data", data);
    };
    return (
        <>
            <DietInput dietSubmit={dietSubmit} />
            <DietOutput />
        </>
    );
}

export default DietManager;
