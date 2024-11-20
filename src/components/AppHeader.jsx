export default function AppHeader() {
    return (
        <div className='d-flex align-items-center justify-content-between py-4'>
            <h1>React Form Multifield</h1>
            <form>
                <div className='mb-3'>
                    <input type="search" className='form-control' name='searchText' id='searchText' aria-describedby='searchHelper' placeholder=' 🔍 Search...' /* value={searchText} onchange={e => setSearchText(e.target.value)} */ />
                </div>
            </form>
        </div>
    )
}