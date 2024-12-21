import { handleInvestmentForm } from "@/lib/action";

function InvestmentForm() {
  return (
    <form
      action={handleInvestmentForm}
      className="rounded-md shadow border py-3 my-3 px-6 max-sm:px-3 max-sm:text-sm"
    >
      <label className="block text-neutral-600 font-semibold" htmlFor="name">
        نام و نام خانوادگی: <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full border rounded-md p-2 my-2"
        required
      />
      <label className="block text-neutral-600 font-semibold" htmlFor="email">
        ایمیل: <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full border rounded-md p-2 my-2"
        required
      />
      <label className="block text-neutral-600 font-semibold" htmlFor="phone">
        تلفن تماس: <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="w-full border rounded-md p-2 my-2"
        required
      />
      <label className="block text-neutral-600 font-semibold" htmlFor="message">
        پیام: <span className="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full border rounded-md p-2 my-2"
        required
      />
      <button
        type="submit"
        className="bg-sky-600 text-sky-50 font-bold rounded-md p-2 w-full my-2 hover:bg-sky-700 transition-all duration-300"
      >
        ارسال
      </button>
    </form>
  );
}

export default InvestmentForm;
