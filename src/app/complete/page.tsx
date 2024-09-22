import { ThankYouIcon } from "@/components/thank-you-icon";

export default function Complete() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      <ThankYouIcon />
      <h2 className="text-3xl mt-4 text-blue-950 font-[family-name:var(--font-Ubuntu-Medium)]">
        Thank you!
      </h2>

      <p className="text-center text-zinc-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
