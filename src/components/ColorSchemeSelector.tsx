import { ChevronDownIcon } from "lucide-react";
import { colorSchemes } from "../assests/assets";

const ColorSchemeSelector = ({
    value,
    onChange,
    isOpen,
    setIsOpen,
}: {
    value: string;
    onChange: (id: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) => {
    const currentScheme = colorSchemes.find((cs) => cs.id === value);

    return (
        <div className="relative space-y-3">
            <label className="block text-sm font-medium text-zinc-200">Color Scheme</label>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-md border px-4 py-3 text-left transition bg-white/8 border-white/10 text-zinc-200 hover:bg-white/12"
            >
                <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-3">
                        <div
                            className="h-6 w-6 rounded border border-white/20"
                            style={{
                                background: `linear-gradient(135deg, ${currentScheme?.colors[0]}, ${currentScheme?.colors[1]})`,
                            }}
                        />
                        <span>{currentScheme?.name}</span>
                    </div>
                </div>
                <ChevronDownIcon
                    className={`h-5 w-5 text-zinc-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full z-50 mt-1 w-full rounded-md border border-white/12 bg-black/20 backdrop-blur-3xl shadow-lg max-h-96 overflow-y-auto">
                    {colorSchemes.map((scheme) => (
                        <button
                            key={scheme.id}
                            type="button"
                            onClick={() => {
                                onChange(scheme.id);
                                setIsOpen(false);
                            }}
                            className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-black/30"
                        >
                            <div
                                className="h-6 w-6 rounded border border-white/20 flex-shrink-0"
                                style={{
                                    background: `linear-gradient(135deg, ${scheme.colors[0]}, ${scheme.colors[1]})`,
                                }}
                            />
                            <span className="text-zinc-100">{scheme.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorSchemeSelector;
