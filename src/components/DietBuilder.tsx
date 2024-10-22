import DietManager from "./DietManager";

export default function DietBuilder() {
    return (
        <div className="grid min-h-screen w-full overflow-hidden">
            <div className="flex flex-col">
                <section className="bg-white dark:bg-gray-950 py-12 md:py-16 lg:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                                    Personalized Diet Plan
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Input your dietary details and we will
                                    generate a custom plan for you.
                                </p>
                            </div>

                            <DietManager />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
