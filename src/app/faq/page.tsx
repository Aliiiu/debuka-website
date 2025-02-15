import AltPageHeader from "@/components/AltPageHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "./_constants";

export default function FAQ() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-grey-100">
			<AltPageHeader title="Frequently Asked Questions" />
			<div className="container my-16 md:my-24">
				<Accordion type="multiple" className="max-w-[1074px] space-y-2">
					{faqData.map((faq, index) => (
						<AccordionItem
							key={crypto.randomUUID()}
							value={`item-${index}`}
							className="bg-muted p-3 md:p-6 rounded-xl"
						>
							<AccordionTrigger className="text-base md:text-[28px] text-primary-dark font-dms-serif">
								{faq.title}
							</AccordionTrigger>
							<AccordionContent className="text-sm md:text-base text-body-alt">
								{faq.content}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</main>
	);
}
