export default function Home() {
  return (
    <div className="flex p-4 font-[family-name:var(--font-Ubuntu-Regular)]">
      <ul>
        <li>
          <i>1</i>
          <span>Step 1</span>
          <p>Your info</p>
        </li>
        <li>
          <i>2</i>
          <span>Step 2</span>
          <p>Select plan</p>
        </li>
        <li>
          <i>3</i>
          <span>Step 3</span>
          <p>Add-ons</p>
        </li>
        <li>
          <i>4</i>
          <span>Step 4</span>
          <p>Summary</p>
        </li>
      </ul>

      <div>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" e.g. Stephen King"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" e.g. stephenking@lorem.com"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
          <input type="submit" value="Next Step" />
        </form>
      </div>
    </div>
  );
}
