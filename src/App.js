// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  const style = {
    button: `p-5`,
  };

  return (
    <span className="wrapper flex items-center justify-center gap-2 mt-10">
      <button className="p-5 rounded-md text-white bg-green-600">Create</button>
      <button className="p-5 rounded-md text-white bg-orange-600">
        Update
      </button>
      <button className="p-5 rounded-md text-white bg-red-600">Delete</button>
    </span>
  );
}
