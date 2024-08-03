import DietOutput from "@/components/DietOutput";
import { getSavedDiets } from "../actions";

export default async function page() {
    const savedDiets = await getSavedDiets();

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            {savedDiets.map((diet) => (
                <DietOutput
                    key={diet.id}
                    readOnly={true}
                    dietInput={diet.diet.input}
                    dietOutput={diet.diet.output}
                />
            ))}
        </div>
    );
}
