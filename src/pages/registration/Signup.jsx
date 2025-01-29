import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { auth, fireDb
 } from '../../firebase/FirebaseConfig';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // New loading state
    const navigate = useNavigate(); // Initialize useNavigate hook

    const signup = async () => {
        console.log("Signup process started");

        if (name === "" || email === "" || password === "") {
            toast.error("All fields are required");
            return;
        }

        setLoading(true); // Set loading to true
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created:", userCredential);

            const user = {
                name: name,
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                time: Timestamp.now()
            };

            const userRef = collection(fireDb, "users");
            await addDoc(userRef, user);
            console.log("User data added to Firestore");

            toast.success("Signup Successful");
            navigate('/login'); // Use navigate to redirect

            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(`Signup failed: ${error.message}`);
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        disabled={loading} // Disable button while loading
                        className={`bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account? <Link className='text-red-500 font-bold' to='/login'>Login</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
