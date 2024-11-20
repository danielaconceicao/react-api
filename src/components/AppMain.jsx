/* eslint-disable react/prop-types */
export default function AppMain({ handleSubmit, formData, handleFormField, articles, handleTrashTaskClick }) {
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            aria-describedby="tatlehelper"
                            placeholder="title blog"
                            required
                            value={formData.title}
                            onChange={handleFormField}
                        />
                        <small id="titlehelper" className="form-text text-muted"></small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            id="image"
                            aria-describedby="imagehelper"
                            placeholder="/images/1.jpg"
                            value={formData.image}
                            onChange={handleFormField}
                        />
                        <small id="imagehelper" className="form-text text-muted"></small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select className="form-select" aria-label="Default select example" name='category' value={formData.category} onChange={handleFormField} >

                            <option value>Open this category</option>
                            <option value="CSS">CSS</option>
                            <option value="HTML">HTML</option>
                            <option value="JAVASCRIPT">JAVASCRIPT</option>
                            <option value="PYTHON">PYTHON</option>
                        </select>

                        <small id="categoryhelper" className="form-text text-muted">Category</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>

                        <textarea
                            className="form-control"
                            name="content"
                            id="content"
                            rows="3"
                            value={formData.content}
                            onChange={handleFormField}
                        ></textarea>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="radioDefault" id="radioDefault1" /* value={formData.tags} onChange={} */ />
                        <label className="form-check-label" htmlFor="radioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" name="radioDefault" id="radioDefault2" /* value={formData.tags} onChange={} */ />
                        <label className="form-check-label" htmlFor="radioDefault2">
                            Default checked radio
                        </label>
                    </div>


                    <div className="form-check mb-3">
                        <input
                            id="published"
                            name='published'
                            type="checkbox"
                            className="form-check-input"
                            value={formData.published}
                            onChange={handleFormField}

                        />
                        <label className="form-check-label" htmlFor=""> Published </label>
                    </div>


                    <button
                        type="submit"
                        className="btn btn-secondary"
                    >
                        Submit
                    </button>

                </div>
            </form>

            <div className='list-group'>
                {articles.map((task, index) => <div key={index} className='list-group-item d-flex justify-content-between my-4'>
                    <div className="card">
                        <img src={task.image} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{task.title}</h5>
                            <p className="card-text">Content: {task.content}</p>
                            <p className="card-text">Category: {task.category}</p>
                            <p className="card-text">Tags: {task.tags}</p>
                            <p className='card-text'>Published: {task.published ? 'Publishable' : 'Unpublishable'}</p>
                            <button onClick={handleTrashTaskClick} data-index={index} className='btn btn-danger'><i className="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>)}
            </div>
        </main>
    )
}