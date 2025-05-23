export default function Note() {
  return (
    <div className="text-[14px] flex flex-row flex-wrap py-3">
      <p>
        <span className="font-semibold ">Note.</span> If you are a member of a
        pre-paid legal service, you may qualify for certain discounts. Please
        contact us for a quote at{" "}
        <a
          href="tel:+17705790109"
          className="cursor-pointer hover:text-logo-blue-800 underline text-logo-blue-500"
        >
          770-579-0109
        </a>
        .
      </p>
    </div>
  );
}
