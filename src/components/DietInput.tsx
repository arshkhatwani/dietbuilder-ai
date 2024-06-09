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

export default function DietInput() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="calories">Total Calories</Label>
                    <Input
                        id="calories"
                        type="number"
                        placeholder="Enter total calories"
                        min="0"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="protein">Protein (%)</Label>
                    <Input
                        id="protein"
                        type="number"
                        placeholder="Enter protein percentage"
                        min="0"
                        max="100"
                    />
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
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="fats">Fats (%)</Label>
                    <Input
                        id="fats"
                        type="number"
                        placeholder="Enter fats percentage"
                        min="0"
                        max="100"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label id="diet">Diet Type</Label>
                    <Select area-labelledby="diet">
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
                </div>
                <div className="space-y-2">
                    <Label htmlFor="meals">Meals per Day</Label>
                    <Input
                        id="meals"
                        type="number"
                        placeholder="Enter meals per day"
                        min="1"
                        max="6"
                    />
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button variant="outline">Regenerate</Button>
                <Button>Save</Button>
            </div>
        </div>
    );
}
