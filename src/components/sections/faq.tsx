import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/animated";

export function FAQ({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description,
}: {
  items: { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-24">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
