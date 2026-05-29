import { yt_html } from "../assests/assets";
import { useSearchParams } from "react-router-dom";

const YTPreview = () => {

	const [searchParams] = useSearchParams();


	const thumbnail_url = searchParams.get("thumbnal_url")
	const title = searchParams.get("title")

	const new_html = yt_html.replace("%%THUMBNAIL_URL%%", thumbnail_url!) .replace("%%TITLE%%", title!)


	return (
		<div className="fixed inset-0 z-100 bg-black">
			
			<iframe title="YouTube Preview" srcDoc={new_html} width="100%" height="100%"></iframe>
			
		</div>
	);
};

export default YTPreview;
