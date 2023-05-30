

const Header = () => {
    return (
        <div>
            <h2>Hello World!</h2>
            <div>
                { import.meta.env.VITE_API_URL }
            </div>
        </div>
        
    )
}

export default Header