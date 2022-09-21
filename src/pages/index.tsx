import { confirm } from '@tauri-apps/api/dialog';
import { useState } from 'react';

const IS_APP: boolean = import.meta.env.VITE_IS_APP as string === "true";

const Home = () => {
    const [is, setIs] = useState<boolean>(false);

    return (
        <div className="min-h-visible h-full w-full">
            <main className="h-full w-full flex justify-center items-center">
                {
                    IS_APP &&
                    <span
                        className='text-black font-semibold text-base cursor-pointer'
                        onClick={async() => {
                            const so = await confirm('Just a dialog box api test. Are you sure?', { title: 'Tanishq Singh', type: 'warning' });
                            setIs(so);
                        }}
                        style={{
                            color: is ? "red" : "black"
                        }}
                    >
                        Confirm
                    </span>
                }
            </main>
        </div>
    );
};

export default Home;