import PropTypes from 'prop-types';
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SidebarItem({ src, alt, text }) {
  return (
    <div className="flex flex-col justify-center px-1.5 mt-4 whitespace-nowrap">
      <img loading="lazy" src={src} alt={alt} className="self-center w-6 aspect-square" />
      <div className="mt-1.5">{text}</div>
    </div>
  );
}

SidebarItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function TableRow({ orderId, product, category, salesChannel, instruction, items, status, statusClass }) {
  return (
    <div className="flex gap-2.5 items-center px-6 py-2.5 mx-2.5 mt-2.5 text-base text-center text-black border-b border-black border-solid max-md:flex-wrap max-md:px-5">
      <div className="flex flex-1 gap-5 justify-center self-stretch py-1.5 whitespace-nowrap">
        <div className="shrink-0 h-6 rounded-md border border-solid border-neutral-400 w-[22px]" />
        <div className="my-auto">{orderId}</div>
      </div>
      <div className="flex-1 self-stretch my-auto">{product}</div>
      <div className="flex-1 self-stretch my-auto">{category}</div>
      <div className="flex-1 self-stretch my-auto">{salesChannel}</div>
      <div className="flex-1 self-stretch my-auto">{instruction}</div>
      <div className="flex-1 self-stretch my-auto">{items}</div>
      <div className={`flex-1 justify-center self-stretch p-2.5 my-auto whitespace-nowrap rounded-[30px] max-md:px-5 ${statusClass}`}>{status}</div>
    </div>
  );
}

TableRow.propTypes = {
  orderId: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  salesChannel: PropTypes.string.isRequired,
  instruction: PropTypes.string,
  items: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusClass: PropTypes.string.isRequired,
};

function DropdownFilter({ label, options, selected, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <select
        className="p-2 border border-gray-300 rounded-md"
        value={selected}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

DropdownFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function MyComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('All Statuses');

  return (
    <div className="flex gap-0 justify-center rounded-none max-md:flex-wrap">
      <aside className="flex flex-col gap-2.5 justify-start items-start py-7 pr-5 text-xs text-center text-white bg-gray-800 w-60 h-screen">
        <div className="shrink-0 mt-10 h-10 bg-white w-[3px]" />
        <nav className="flex flex-col justify-center px-2.5">
          <SidebarItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2cbebe994e4f8e468516ebe52fad513fcedc6a22add37c9a46dcaa7efcb29f?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="Dashboard icon" text="Dashboard" />
          <SidebarItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2cbebe994e4f8e468516ebe52fad513fcedc6a22add37c9a46dcaa7efcb29f?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="In Stock icon" text="In Stock" />
          <SidebarItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2cbebe994e4f8e468516ebe52fad513fcedc6a22add37c9a46dcaa7efcb29f?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="Products icon" text="Products" />
          <SidebarItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2cbebe994e4f8e468516ebe52fad513fcedc6a22add37c9a46dcaa7efcb29f?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="Sales icon" text="Sales" />
          <SidebarItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2cbebe994e4f8e468516ebe52fad513fcedc6a22add37c9a46dcaa7efcb29f?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="Orders icon" text="Orders" />
          <SidebarItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2cbebe994e4f8e468516ebe52fad513fcedc6a22add37c9a46dcaa7efcb29f?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="Users icon" text="Users" />
        </nav>
      </aside>
      <main className="flex flex-col flex-1 justify-center p-5 max-md:max-w-full">
        <section className="flex flex-col py-2.5 bg-white max-md:max-w-full">
          <header className="flex gap-2.5 justify-between px-3.5 py-1 text-center border-b border-indigo-100 border-solid max-md:flex-wrap max-md:max-w-full">
            <h1 className="my-auto text-3xl font-medium text-sky-500">In stock</h1>
            <div className="flex flex-col justify-center p-5 text-2xl text-white bg-zinc-300 bg-opacity-0">
              <div className="flex gap-2.5 justify-center px-4 py-2.5 rounded-md">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f5779e123cdb81e3b37991f0e8d9d4888cc672caf1e863f12bccbcab942523a?apiKey=8bf9233e86c34428ab6abba773017b1a&" alt="New Stock" className="shrink-0 my-auto w-3.5 aspect-square fill-sky-500" />
                <div>New Stock</div>
              </div>
            </div>
          </header>
          <div className="flex gap-2.5 justify-between px-6 py-2 mx-2.5 mt-2.5 w-full border-b border-indigo-100 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <DropdownFilter
              label="Category"
              options={['All Categories', 'cat1', 'cat2', 'cat3', 'cat4']}
              selected={category}
              onChange={setCategory}
            />
            <DropdownFilter
              label="Status"
              options={['All Statuses', 'Completed', 'Pending']}
              selected={status}
              onChange={setStatus}
            />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Date</label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-2.5 items-center px-6 py-2.5 mx-2.5 mt-2.5 text-xl text-center text-black border-b border-black border-solid max-md:flex-wrap max-md:px-5">
            <div className="flex flex-1 gap-5 justify-center self-stretch py-1.5">
              <div className="shrink-0 h-6 rounded-md border border-solid border-neutral-400 w-[22px]" />
              <div className="flex-auto my-auto">Order ID</div>
            </div>
            <div className="flex-1 self-stretch my-auto">Product</div>
            <div className="flex-1 self-stretch my-auto">Category</div>
            <div className="flex-1 self-stretch my-auto">Sales Channel</div>
            <div className="flex-1 self-stretch my-auto">Instruction</div>
            <div className="flex-1 self-stretch my-auto">Items</div>
            <div className="flex-1 self-stretch my-auto">Status</div>
          </div>
          <TableRow orderId="#7676" product="Inverter" category="cat1" salesChannel="Store name" instruction="Stock adjustment" items="80/100" status="Completed" statusClass="text-green-900 bg-green-400" />
          <TableRow orderId="#7676" product="Battery" category="cat2" salesChannel="Store name" instruction="" items="80/100" status="Pending" statusClass="text-lime-900 bg-lime-300" />
          <TableRow orderId="#7676" product="Generator" category="cat2" salesChannel="Store name" instruction="Stock adjustment" items="80/100" status="Completed" statusClass="text-green-900 bg-green-400" />
          <TableRow orderId="#7676" product="Charger" category="cat3" salesChannel="Store name" instruction="Stock adjustment" items="80/100" status="Completed" statusClass="text-green-900 bg-green-400" />
          <TableRow orderId="#7676" product="Power" category="cat4" salesChannel="Store name" instruction="" items="80/100" status="Completed" statusClass="text-green-900 bg-green-400" />
        </section>
      </main>
    </div>
  );
}

export default MyComponent;
