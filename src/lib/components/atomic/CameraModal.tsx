import React, { type Dispatch, type SetStateAction } from "react";

type CameraModalProps = {
    showCameraModal: boolean,
    setShowCameraModal: Dispatch<SetStateAction<boolean>>
};

export default function CameraModal({ showCameraModal, setShowCameraModal }: CameraModalProps) {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [availableCameras, setAvailableCameras] = React.useState<MediaDeviceInfo[]>([]);

    React.useEffect(() => {
        let isMounted = true;
        let localStream: MediaStream | null = null;

        const getCameras = async () => {
            try {
                localStream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: {
                            ideal: 1920,
                        },
                        height: {
                            ideal: 1080
                        }
                    },
                    audio: false
                });

                if (!isMounted) {
                    // If the component is unmounted before the stream loads, stop it immediately
                    for (const track of localStream.getTracks()) {
                        track.stop();
                    }
                    return;
                }

                if (videoRef.current) {
                    videoRef.current.srcObject = localStream;
                }

                const devices = await navigator.mediaDevices.enumerateDevices();
                setAvailableCameras(devices.filter((device) => device.kind === "videoinput"));
            } catch (error) {
                console.error("Error accessing cameras: ", error);
            }
        };

        if (showCameraModal) {
            getCameras();
        }

        return () => {
            isMounted = false;

            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }

            if (localStream) {
                for (const track of localStream.getTracks()) {
                    track.stop();
                }
            }

            setAvailableCameras([]);
        };
    }, [showCameraModal]);


    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/65 z-40 flex items-center justify-center">
            <div className="bg-neutral-800 min-w-[36rem] min-h-96 rounded-md p-3">
                <div className="inline-flex items-center justify-between w-full mb-2">
                    <h1 className="text-lg font-light">
                        Select a camera
                    </h1>
                    <button type="button" className="group" onClick={() => setShowCameraModal(false)}>
                        <svg
                            className="size-4 text-neutral-400 group-hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-labelledby="close-icon-title"
                        >
                            <title id="close-icon-title">Close</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
                <video ref={videoRef} autoPlay controls={false} className="max-w-xl w-max aspect-video rounded-md" />
                <select className="w-full mt-3 p-2 rounded-md bg-neutral-700 text-neutral-100" onChange={(e) => console.log(e.target.value)}>
                    {availableCameras.map((camera) => (
                        <option key={camera.deviceId} value={camera.deviceId}>{camera.label}</option>
                    ))}
                </select>
                <div className="inline-flex items-center justify-end w-full mt-3 gap-2">
                    <button 
                        type="button" 
                        className="bg-neutral-700 px-3 py-2 rounded-md text-neutral-300"
                        onClick={() => setShowCameraModal(false)}
                        >
                        Cancel
                    </button>
                    <button type="button" className="bg-indigo-500 px-3 py-2 rounded-md">
                        Start Stream
                    </button>
                </div>
            </div>
        </div>
    )
}