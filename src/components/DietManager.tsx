"use client";

import { generateDiet } from "@/app/diets/actions";
import DietInput, { DietForm } from "./DietInput";
import DietOutput from "./DietOutput";

function DietManager() {
    const dietSubmit = async (data: DietForm) => {
        await generateDiet(data);
    };
    return (
        <>
            <DietInput dietSubmit={dietSubmit} />
            <DietOutput />
        </>
    );
}

export default DietManager;
