import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/books";

export const CreateNewBook = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formMap = new FormData();
    let valueForm = null;
    for (const key in data) {
      if (typeof data[key] === "object") {
        valueForm = data[key][0];
      } else {
        valueForm = data[key];
      }
      formMap.append(key, valueForm);
    }
    dispatch(addBook(formMap));
  };

  return (
    <div className="border p-4 overflow-auto border rounded-4 m-auto shadow-lg p-3 mb-5">
      <h1 className="display-6">Create new Book</h1>

      <form id="formin" onSubmit={handleSubmit(onSubmit)} className="">
        <div className="row mb-3">
          {/* Title */}
          <div className="col-md-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="don quijote"
              {...register("title", { required: true })}
            />
          </div>

          {/* Genre */}
          <div className="col-md-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              placeholder="x"
              {...register("genre", { required: true })}
            />
          </div>

          {/* Categories */}
          <div className="col-md-3">
            <label htmlFor="categories" className="form-label">
              Categories
            </label>

            <input
              type="text"
              className="form-control"
              id="categories"
              placeholder="Terror, Miedo, Fantasia"
              {...register("categories", { required: true })}
            />
          </div>

          {/* Seller */}
          <div className="col-md-3">
            <label htmlFor="seller" className="form-label">
              Seller
            </label>

            <input
              type="text"
              className="form-control"
              id="seller"
              {...register("seller", { required: true })}
              placeholder="la pepo"
            />
          </div>
        </div>

        <div className="row mb-3">
          {/* Image */}
          <div className="col-md-8">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              {...register("image", { required: true })}
            />
          </div>

          {/* Stock */}
          <div className="col-md-2">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className="form-control"
              id="stock"
              {...register("stock", { required: true })}
            />
          </div>

          {/* Price */}
          <div className="col-md-2 ">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              {...register("price", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          {/* description */}
          <div className="col-md-6">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="form-control"
              id="description"
              rows="3"
            ></textarea>
          </div>

          {/* Resume */}
          <div className="col-md-6">
            <label htmlFor="resume" className="form-label">
              Resume
            </label>
            <textarea
              {...register("resume", { required: true })}
              className="form-control"
              id="resume"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="col-12">
          <button className="mt-4 btn btn-outline-dark ">Save book</button>
        </div>
      </form>
    </div>
  );
};
