import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/equipment">
                        Equipment
                    </Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;