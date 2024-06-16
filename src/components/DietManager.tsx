"use client";

import { generateDiet } from "@/app/diets/actions";
import { DietResponse } from "@/lib/googleAI/gemini";
import { useState, useTransition } from "react";
import DietInput, { DietForm } from "./DietInput";
import DietOutput from "./DietOutput";
import DietLoading from "./DietLoading";

function DietManager() {
    const [isPending, startTransition] = useTransition();
    const [dietInput, setDietInput] = useState<DietForm>();
    const [dietResponse, setDietResponse] = useState<DietResponse>([]);

    const dietSubmit = (data: DietForm) => {
        startTransition(async () => {
            const res = await generateDiet(data);
            setDietResponse(res);
            setDietInput(data);
        });
    };

    return (
        <>
            <DietInput dietSubmit={dietSubmit} />
            {!isPending ? (
                dietResponse.length ? (
                    <DietOutput
                        dietInput={dietInput}
                        dietOutput={dietResponse}
                    />
                ) : (
                    <></>
                )
            ) : (
                <DietLoading />
            )}
        </>
    );
}

export default DietManager;
