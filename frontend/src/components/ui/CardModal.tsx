import { useState } from "react";
import Swal from "sweetalert2";

const CardModal = () => {
  const [buttonLodding, setButtonLodding] = useState(false);

  const addCardInfoHandler = async (e: any) => {
    setButtonLodding(true);
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.title.value;
    const description = form.description.value;
    const cardData = {
      title,
      description,
    };

    try {
      const res = await fetch("http://localhost:5000/api/v1/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      const data = await res.json();
      setButtonLodding(false);
      if (data?.success) {
        Swal.fire({
          text: "Success!",
          title: `${data?.message}`,
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          text: "warnnig!",
          title: `${data?.message}`,
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
        });
      }

      form.reset();
      closeModal();
    } catch (error) {
      setButtonLodding(false);
      console.error("Error:", error);
      closeModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
    modal.close();
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-2">Add info!</h3>
          <div className="">
            <form onSubmit={addCardInfoHandler}>
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded w-full mb-3"
                name="title"
                placeholder="Enter title..."
                required
              />
              <br />
              <label htmlFor="description">Description</label>
              <br />
              <input
                type="text"
                className="border p-2 rounded w-full"
                name="description"
                placeholder="Enter description..."
                required
              />
              <br />
              <div className="flex justify-end mt-5">
                <button type="button" className="btn mr-2" onClick={closeModal}>
                  Close
                </button>
                <button
                  type="submit"
                  className="btn bg-slate-900 text-slate-200 hover:bg-slate-900 hover:text-slate-200"
                >
                  {buttonLodding && (
                    <span className="loading loading-spinner mr-2"></span>
                  )}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CardModal;
