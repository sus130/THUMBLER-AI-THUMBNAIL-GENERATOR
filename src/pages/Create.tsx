import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import AspectRatioSelector from "../components/AscpectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import { colorSchemes, type AspectRatio, type ThumbnailStyle, type IThumbnail } from "../assests/assets";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";


const Create = () => {

	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [additionalDetails, setAdditionalDetails] = useState("");

	const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9");
	const [colorScheme, setColorScheme] = useState<string>(colorSchemes[0].id);
	const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic");

	const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

	const handleAdditionalDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setAdditionalDetails(e.target.value);
		e.target.style.height = "96px";
		e.target.style.height = `${Math.max(e.target.scrollHeight, 96)}px`;
	};

	const handleGenerateThumbnail = () => {
		// TODO: Call API to generate thumbnail with:
		// { title, additionalDetails, aspectRatio, colorScheme, style }
		console.log({
			title,
			additionalDetails,
			aspectRatio,
			colorScheme,
			style,
		});
	};

	return (
		<>
			<SoftBackdrop/>
			<div className="pt-24 min-h-screen">
				<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
					<div className="grid lg:grid-cols-[400px_1fr] gap-8">
						{/* LEFT PANEL */}
						<div className="space-y-6">
							<div className="mt-4 p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
								<h2 className="text-2xl font-bold text-white">Create Your Thumbnail</h2>
								<p className="text-white/70">Describe your idea and let AI generate a professional thumbnail for your content.</p>
								
								<div className="space-y-5">
									{/* TITLE INPUT */}
									<div className="space-y-2">
										<label htmlFor="title" className="block text-sm font-medium text-white mb-1">Title or Topic</label>
										<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} maxLength={100} placeholder="e.g. , How to drive a car?" className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
										<div className="flex justify-end">
											<span className="text-xs text-zinc-400">{title.length}/100</span>
										</div>
									</div>

									{/* AspectRatioSelector */}
									<AspectRatioSelector value={aspectRatio} onChange={setAspectRatio}/>
									
									{/* StyleSelector */}
									<StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen}/>
						{/* ColorSchemeSelector */}
						<ColorSchemeSelector value={colorScheme} onChange={setColorScheme}/>
									<div className="space-y-2">
										<label className="block text-sm font-medium">
											Additional Prompts <span className="text-zinc-400 text-xs">(optional)</span>
										</label>
										<textarea value={additionalDetails} onChange={handleAdditionalDetailsChange} placeholder="e.g. , vibrant colors, bold text, minimalistic design" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none overflow-hidden min-h-24"/>

									</div>
								</div>
								
								
								{/* button */}
								{!id && (
									<button onClick={handleGenerateThumbnail} className="mt-4 text-[15px] w-full py-3.5 rounded-xl font-medium bg-gradient-to-b from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 disabled:cursor-not-allowed transition-colors">
										Generate Thumbnail
									</button>
								)}
							</div>
							
						</div>
						{/* RIGHT PANEL */}
						<div>
							<div className="mt-4 p-6 rounded-2xl bg-white/8 border border-white/10 shadow-xl">
								<h2 className="text-lg font-semibold text-zinc-100 mb-4">Preview</h2>
								<PreviewPanel thumbnail={thumbnail} isLoading={loading} aspectRatio={aspectRatio} />
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Create;
