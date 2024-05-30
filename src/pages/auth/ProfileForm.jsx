import { Form, useLoaderData } from "react-router-dom";
import { InputGroup } from "../../components/inputs/InputGroup";
import { AuthFormsWrap } from "../../components/wraps/AuthFormsWrap";
import { GroupButton } from "../../components/buttons/GroupButton";
import { useState } from "react";
import { dataService } from "../../services/data-services";
import { avatar_URL } from "../../config/main.config";

export function ProfileForm({ profile = null }) {
    const { userAuth } = useLoaderData()
    const [avatar, setAvatar] = useState(null)
    const [avatarPreview, setAvatarPreview] = useState(null)
    const [avatarChange, setAvatarChange] = useState(false)
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatar(file);
            setAvatarPreview(reader.result);
            setAvatarChange(true)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const handleSubmitAvatar = async (event) => {

        event.preventDefault();
        const formData = new FormData();
        formData.append('avatar', avatar);
        dataService.updateData(`${avatar_URL}/update`, formData, userAuth.data.accessToken)
    }
    return (
        <AuthFormsWrap captionForm="Add Profile">
            <form method="put" onSubmit={handleSubmitAvatar}>
                <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                        {
                            !profile ?
                                <img
                                    id="preview_img"
                                    className="h-16 w-16 object-cover rounded-full bg-gray-400"
                                    src={avatarPreview}
                                    alt=""
                                />
                                :
                                <img
                                    id="preview_img"
                                    className="h-16 w-16 object-cover rounded-full"
                                    src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
                                    alt="Current profile photo"
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
                            avatarChange && <GroupButton cancelButton={false} />
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