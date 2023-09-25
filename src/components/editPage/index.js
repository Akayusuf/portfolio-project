import Header from '../Header'

const EditPage = () => {
    const handleSave = () => {
        console.log('saved');
    }

    return(
        <div>
            <Header />
            <div>
                <input type='text' placeholder='ENTER PROJECT NAME' />
                <input type='text' placeholder='ENTER PROJECT DESCRIPTION' />
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default EditPage;