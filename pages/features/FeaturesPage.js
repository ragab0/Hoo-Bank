import Controls from "@/components/Controls";
import Deals from "@/components/Deals";
import Feedbacks from "@/components/Feedbacks";
import "./Features.css";


export default function FeaturesPages() {
  return (
    <div id="features" className="features-page">
      <Controls />
      <Deals />
      <Feedbacks />
    </div>
  )
}
