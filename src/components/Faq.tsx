"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Does HAC offer PSVA awards for its volunteers?",
    answer:
      "Yes! We offer PSVA awards to our volunteers who have completed 100 or more hours of service. Please contact us or visit the PSVA website for more information.",
  },
  {
    question: "Why does HAC charge a 7% transaction fee?",
    answer: "The fee is taken by our payment processor to cover some of our organizations backend costs. This includes legal fees, accounting fees, and processing fees.",
  },
  {
    question: "What is HAC's refund policy?",
    answer: "We will occasionally offer refunds on a case-by-case basis. Please contact us if you would like to request a refund.",
  },

  {
    question: "What is the best way to contact HAC?",
    answer:
      "Scroll to the bottom of the page. You will find our contact information there. You can also reach out to us on social media. We will try to respond in under 2 business days.",
  },
];
