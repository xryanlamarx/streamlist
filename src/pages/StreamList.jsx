import { useState } from "react";

function StreamList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Adds a new movie or show
  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setItems([...items, newItem]);

    // Clears the input box after submission
    setInput("");
  };

  // Marks an item complete or incomplete
  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Deletes an item
  const deleteItem = (id) => {
    setItems(
      items.filter((item) => item.id !== id)
    );
  };

  // Starts editing an item
  const startEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  // Saves an edited item
  const saveEdit = (id) => {
    if (editText.trim() === "") {
      return;
    }

    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, text: editText }
          : item
      )
    );

    setEditId(null);
    setEditText("");
  };

  // Cancels editing
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <main className="streamlist-page">
      <div className="streamlist-card">

        <h1>My StreamList</h1>

        <p className="page-description">
          Add movies and shows you want to watch.
        </p>

        <form
          className="streamlist-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter a movie or show"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
          />

          <button
            type="submit"
            className="add-button"
          >
            Add to StreamList
          </button>
        </form>

        <div className="streamlist-items">

          {items.length === 0 ? (

            <p className="empty-message">
              Your StreamList is currently empty.
            </p>

          ) : (

            items.map((item) => (

              <div
                key={item.id}
                className={
                  item.completed
                    ? "streamlist-item completed"
                    : "streamlist-item"
                }
              >

                {editId === item.id ? (

                  <div className="edit-section">

                    <input
                      className="edit-input"
                      type="text"
                      value={editText}
                      onChange={(event) =>
                        setEditText(event.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => saveEdit(item.id)}
                      title="Save"
                    >
                      💾
                    </button>

                    <button
                      type="button"
                      className="icon-button"
                      onClick={cancelEdit}
                      title="Cancel"
                    >
                      ❌
                    </button>

                  </div>

                ) : (

                  <>

                    <span className="item-text">
                      {item.text}
                    </span>

                    <div className="item-buttons">

                      <button
                        type="button"
                        className="icon-button"
                        onClick={() =>
                          toggleComplete(item.id)
                        }
                        title="Mark Complete"
                      >
                        ✓
                      </button>

                      <button
                        type="button"
                        className="icon-button"
                        onClick={() =>
                          startEdit(item)
                        }
                        title="Edit"
                      >
                        ✏️
                      </button>

                      <button
                        type="button"
                        className="icon-button"
                        onClick={() =>
                          deleteItem(item.id)
                        }
                        title="Delete"
                      >
                        🗑️
                      </button>

                    </div>

                  </>

                )}

              </div>

            ))

          )}

        </div>

      </div>
    </main>
  );
}

export default StreamList;