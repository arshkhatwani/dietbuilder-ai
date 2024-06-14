import { useFormik } from "formik";
import { ZodError, z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FormError from "./utils/FormError";

const ValidationSchema = z.object({
    calories: z.number().min(100, "Calories must be at least 100"),
    protein: z
        .number()
        .min(0, "Protein must be at least 0")
        .max(100, "Protein must be at most 100"),
    carbs: z
        .number()
        .min(0, "Carbs must be at least 0")
        .max(100, "Carbs must be at most 100"),
    fats: z
        .number()
        .min(0, "Fats must be at least 0")
        .max(100, "Fats must be at most 100"),
    dietType: z.enum(["vegetarian", "non-vegetarian"]).default("vegetarian"),
    mealCount: z.number(),
});
export type DietForm = z.infer<typeof ValidationSchema>;

export default function DietInput({
    dietSubmit,
}: {
    dietSubmit: (data: DietForm) => void;
}) {
    const formik = useFormik<DietForm>({
        initialValues: {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            dietType: "vegetarian",
            mealCount: 1,
        },
        onSubmit: (values) => {
            dietSubmit(values);
        },
        validate: (values) => {
            try {
                ValidationSchema.parse(values);
            } catch (error) {
                if (error instanceof ZodError) {
                    return error.formErrors.fieldErrors;
                }
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="calories">Total Calories</Label>
                        <Input
                            id="calories"
                            type="number"
                            placeholder="Enter total calories"
                            min="0"
                            value={formik.values.calories}
                            onChange={formik.handleChange}
                        />
                        <FormError error={formik.errors.calories} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="protein">Protein (%)</Label>
                        <Input
                            id="protein"
                            type="number"
                            placeholder="Enter protein percentage"
                            min="0"
                            max="100"
                            value={formik.values.protein}
                            onChange={formik.handleChange}
                        />
                        <FormError error={formik.errors.protein} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="carbs">Carbs (%)</Label>
                        <Input
                            id="carbs"
                            type="number"
                            placeholder="Enter carbs percentage"
                            min="0"
                            max="100"
                            value={formik.values.carbs}
                            onChange={formik.handleChange}
                        />
                        <FormError error={formik.errors.carbs} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fats">Fats (%)</Label>
                        <Input
                            id="fats"
                            type="number"
                            placeholder="Enter fats percentage"
                            min="0"
                            max="100"
                            value={formik.values.fats}
                            onChange={formik.handleChange}
                        />
                        <FormError error={formik.errors.fats} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label id="diet">Diet Type</Label>
                        <Select
                            area-labelledby="diet"
                            value={formik.values.dietType}
                            onValueChange={(val) =>
                                formik.setFieldValue("dietType", val)
                            }>
                            <SelectTrigger>
                                <SelectValue placeholder="Select diet type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="vegetarian">
                                    Vegetarian
                                </SelectItem>
                                <SelectItem value="non-vegetarian">
                                    Non-Vegetarian
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <FormError error={formik.errors.dietType} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="mealCount">Meals per Day</Label>
                        <Input
                            id="mealCount"
                            type="number"
                            placeholder="Enter meals per day"
                            value={formik.values.mealCount}
                            onChange={formik.handleChange}
                        />
                        <FormError error={formik.errors.mealCount} />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    {/* <Button variant="outline">Regenerate</Button>
                    <Button>Save</Button> */}
                    <Button type="submit">Submit</Button>
                </div>
            </div>
        </form>
    );
}
