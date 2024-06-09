import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { InputGroup } from "../../components/inputs/InputGroup";
import { AuthFormsWrap } from "../../components/wraps/AuthFormsWrap";
import { GroupButton } from "../../components/buttons/GroupButton";
import { useState } from "react";
import { dataService } from "../../services/data-services";
import { avatar_URL } from "../../config/main.config";
import axios from "axios";
import { Loader } from "../../components/loaders/loader";

export function ProfileForm({ profile = null }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmitAvatar = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert('Por favor, selecciona una imagen para subir.');
            return;
        }

        const formData = new FormData();
        formData.append('avatar', selectedFile);

        try {
            const response = await axios.post('/api/avatar/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data) {
                setUploadSuccess(true);
            }
        } catch (error) {
            console.error('Error al subir la imagen:', error);
        }
    };
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loader />
    return (
        <AuthFormsWrap captionForm="Add Profile">
            <form method="put" onSubmit={handleSubmitAvatar}>
                <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                        {
                            !profile ?
                                (
                                    previewUrl ?
                                        <img
                                            id="preview_img"
                                            className="h-16 w-16 object-cover rounded-full bg-gray-400"
                                            src={previewUrl}
                                            alt=""
                                        />
                                        :
                                        <img
                                            id="preview_img"
                                            className="h-16 w-16 object-cover rounded-full bg-gray-400"
                                            src={profile.avatar}
                                            alt=""
                                        />
                                )
                                :
                                <img
                                    id="preview_img"
                                    className="h-16 w-16 object-cover rounded-full"
                                    src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
                                    alt="user avatar"
                                />
                        }
                    </div>
                    <div className="block md:flex">
                        <label className="block w-auto  mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blueF-100">
                            <span className="sr-only">Choose profile photo</span>
                            <input
                                type="file"
                                onChange={handleChangeAvatar}
                                className="hidden"
                            />
                            Choose avatar
                        </label>
                        {
                            previewUrl && <GroupButton cancelButton={false} />
                        }
                    </div>
                </div>
            </form>
            <Form>
                <div className="block md:grid md:grid-cols-2 md gap-2">
                    <InputGroup
                        labelName={'country'}
                        type={'text'}
                        placeholder={'country'}
                        name={'user-country'}
                    />
                    <InputGroup
                        labelName={'city'}
                        type={'text'}
                        placeholder={'city'}
                        name={'user-city'}
                    />
                    <InputGroup
                        labelName={'postal code'}
                        type={'text'}
                        placeholder={'postal code'}
                        name={'user-postal-code'}
                    />
                    <InputGroup
                        labelName={'phone'}
                        type={'phone'}
                        placeholder={'phone'}
                        name={'user-phone'}
                    />
                </div>
                <InputGroup
                    labelName={'address'}
                    type={'address'}
                    placeholder={'address'}
                    name={'user-address-1'}
                />
                <InputGroup
                    labelName={''}
                    type={'address'}
                    placeholder={'address'}
                    name={'user-address-2'}
                    requiredInput={false}
                />

                <GroupButton />
            </Form>
        </AuthFormsWrap>
    )
}