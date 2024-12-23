import TestimonialsGallery from "../ui/TestimonialsGallery";
import { testimonials } from "@/utils/utils";
import TestimonialItem from "../ui/TestimonialItem";
import SectionHeader from "../ui/SectionHeader";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

function TestimonialsSection() {
  return (
    <div className="bg-blue-100 ">
      <div className=" mt-20 mr-8 max-md:mt-12 max-md:mr-4">
        <SectionHeader
          title="نظر متخصصان"
          icon={<HiOutlineChatBubbleBottomCenterText />}
        />
      </div>
      <section className=" grid grid-cols-[55fr_45fr] items-center max-lg:grid-cols-1 py-4 overflow-x-hidden">
        <div className=" pt-0 p-24 max-xl:p-16 max-lg:px-8 max-sm:py-8">
          <div className="grid grid-cols-2 gap-x-20 gap-y-12 max-sm:grid-cols-1">
            {testimonials.map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                person={testimonial.person}
                photo={testimonial.photo}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
        <TestimonialsGallery />
      </section>
    </div>
  );
}

export default TestimonialsSection;
