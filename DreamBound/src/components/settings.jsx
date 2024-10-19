export default function Settings({onClose, visible}) {

    if(!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-ash rounded w-10/12 h-4/6">
                <div>Settings</div>
                <button onClick={onClose}>Exit Settings</button>
            </div>
        </div>
    );
}