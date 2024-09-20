export function UserForm() {
  return (
    <div className="max-w-[400] mx-auto pt-12 pb-6 text-blue-950">
      <div className=" pb-8">
        <h2 className="font-[family-name:var(--font-Ubuntu-Bold)] text-3xl">
          Personal info
        </h2>
        <p className="text-zinc-400">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm"
            htmlFor="name">
            Name
          </label>
          <input
            className="border border-zinc-300 rounded-lg px-4 py-2.5 leading-normal"
            type="text"
            name="name"
            id="name"
            placeholder=" e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm"
            htmlFor="email">
            Email Address
          </label>
          <input
            className="border border-zinc-300 rounded-lg px-4 py-2.5 leading-normal"
            type="email"
            name="email"
            id="email"
            placeholder=" e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm"
            htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border border-zinc-300 rounded-lg px-4 py-2.5 leading-normal"
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <input
          type="submit"
          value="Next Step"
          className="inline max-w-max py-2.5 px-5 rounded-lg ml-auto bg-blue-950 text-zinc-50 font-[family-name:var(--font-Ubuntu-Bold)] capitalize mt-14"
        />
      </form>
    </div>
  );
}
