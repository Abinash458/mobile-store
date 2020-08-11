import React from 'react';
import styled from "styled-components";
import { ButtonContainer } from "../../StyledComponents/Button";
import { Control, LocalForm, Errors } from 'react-redux-form';
import cx from 'classnames';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const RenderCommentModel = (props) => {
    return (
        <CommentModelWrapper>
            <div className="row">
                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>Submit Comment</h5>
                    <LocalForm onSubmit={(value) => props.props.handleCommentSubmit(value)}>
                        <div className="input-group">
                            <label>Rating</label>
                            <Control.select
                                model=".rating"
                                type="select"
                                className={cx("select", "form-control")}
                                name="contactType">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </div>
                        <div className="input-group">
                            <Control.text
                                className={cx("input", "form-control")}
                                model=".name"
                                id="name"
                                name="name"
                                placeholder="Name"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </div>
                        <div className="input-group">
                            <Control.textarea
                                model=".comment"
                                className={cx("textarea", "form-control")}
                                type="textarea"
                                id="comment"
                                name="comment"
                                rows="3"
                                placeholder="Your Comment"
                            />
                        </div>
                        <ButtonContainer
                            onClick={() => {
                                props.props.toggleModal();
                            }}
                        >
                            back
                    </ButtonContainer>
                        <ButtonContainer
                            cart
                            type="submit"
                        >
                            Submit
                    </ButtonContainer>
                    </LocalForm>
                </div>
            </div>
        </CommentModelWrapper>
    );
}

const CommentModel = (props) => {
    return (
        <div>
            {!props.modalOpen ? null : (
                <RenderCommentModel props={props} />
            )}
        </div>
    );
}

export default CommentModel;

const CommentModelWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
    .input-group {
        width: 100%;
        margin: 20px 0;
    }
    .select, .input {
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        padding-bottom: 5px;
        background-color: transparent;
        width: 100%;
        padding: 0;
    }
    .textarea {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        padding: 0;
        padding-bottom: 5px;
        background-color: transparent;
        resize: none;
    }
    label {
        margin-bottom: 6px;
        display: block;
    }
`;