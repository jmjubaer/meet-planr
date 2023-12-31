
import Featured from "@/Featured/Featured";
import PricingPlan from "@/PricingPlan/PricingPlan";
import Counting from "@/Counting/Information";
import Banner from "@/Banner/Banner";
import Review from "@/Review/Review";

const Home = () => {
	return (
		<div>
			<Banner />
			<Featured></Featured>
			<Counting></Counting>
			<PricingPlan></PricingPlan>
			<Review ></Review>
		</div>
	);
}

export default Home;
