import { useEffect, useState } from "react";
import QRcode from "../../../utils/QRcode.svg";
import "./twoFa.scss";

const TwoFa = () => {
  const [separator, setSeparator] = useState(false);
  const [step, setStep] = useState(0);
  const [showSteps, setShowSteps] = useState(true);
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const storageState = localStorage.getItem("step");
  const parsedStorageState = storageState && JSON.parse(storageState);
  const rightCode = "123456";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let timer: any;
    timer && clearTimeout(timer);

    timer = setTimeout(() => {
      setInput(e.target.value);
    }, 1000);
  };

  const validate = (text: string) => {
    if (text === rightCode) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validate(input);
  }, [input]);

  useEffect(() => {
    if (parsedStorageState && parsedStorageState.length > 0) {
      setSeparator(true);
    } else {
      setSeparator(false);
    }
  }, [parsedStorageState]);

  const copyToClipboard = () => {
    const gridDiv = document.getElementsByClassName("step_grid_codes");
    const childText = gridDiv[0].innerHTML;
    const text = childText.replace(/<span>/g, "").replace(/<\/span>/g, " ");
    if (text) {
      const copiedText = navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
      return copiedText;
    }
  };

  const resetTwoFa = () => {
    localStorage.removeItem("step");
    localStorage.removeItem("show");
    setSeparator(false);
    setStep(0);
  };

  const changeStarColor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const star1 = document.getElementById("star1");
    const star2 = document.getElementById("star2");

    if (star1 && star2 && e.currentTarget === star1) {
      star1.style.color = "#FFC107";
      star2.style.color = "#000";
    }
    if (star1 && star2 && e.currentTarget === star2) {
      star1.style.color = "#000";
      star2.style.color = "#FFC107";
    }
  };

  const stepOne = () => {
    setSeparator(true);
    setStep(1);
    localStorage.setItem(
      "step",
      JSON.stringify([
        {
          step: 1,
          checked: false,
          isValid: false,
        },
      ])
    );
  };

  const stepTwo = () => {
    setSeparator(true);
    setInput("");
    setStep(2);
    localStorage.setItem(
      "step",
      JSON.stringify([
        {
          step: 1,
          checked: true,
          isValid: true,
        },
        {
          step: 2,
          checked: false,
          isValid: false,
        },
      ])
    );
  };

  const stepThree = () => {
    setSeparator(true);
    setStep(3);
    localStorage.setItem(
      "step",
      JSON.stringify([
        {
          step: 1,
          checked: true,
          isValid: true,
        },
        {
          step: 2,
          checked: true,
          isValid: true,
        },
        {
          step: 3,
          checked: false,
          isValid: false,
        },
      ])
    );
  };

  const stepFour = () => {
    localStorage.setItem("show", JSON.stringify(setShowSteps(false)));
    setSeparator(true);
    setInput("");
    setStep(4);
    localStorage.setItem(
      "step",
      JSON.stringify([
        {
          step: 1,
          checked: true,
          isValid: true,
        },
        {
          step: 2,
          checked: true,
          isValid: true,
        },
        {
          step: 3,
          checked: true,
          isValid: true,
        },
        {
          step: 4,
          checked: false,
          isValid: false,
        },
      ])
    );
  };

  // console.log(parsedStorageState);
  // console.log(input);
  // console.log(isValid);

  return (
    <>
      <div className="content_container">
        <div className="fa_container">
          <div className="warning_text_container">
            <p className="warning_item">
              Двухфакторная аутентификация (2FA) позволяет эффективнее защищать
              аккаунт от несанкционированного проникновения. При её
              использовании для доступа к вашему аккаунту необходимо
              предоставить данные двух разных типов (пароль + специальный код),
              что значительно надёжнее классической парольной системы.
            </p>
            <p className="warning_item">
              Подробнее о настройках этого подраздела{" "}
              <a href="" style={{
                textDecoration: "none",
                color: '#2d9cdb'
              }}>читайте в нашей базе знаний.</a>
            </p>
          </div>
          {/* step four */}
          {parsedStorageState && parsedStorageState.length === 4 && (
            <div className="step_four_container">
              <button className="reset_btn" onClick={resetTwoFa}>
                отключить
              </button>
              <div className="step_four_wrapper">
                <div className="step_four_item">
                  <div className="step_four_item_description">
                    <div className="step_four_icon_wrapper">
                      <i
                        className="fa-solid fa-laptop"
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                        }}
                      ></i>
                    </div>
                    <div className="step_four_text">
                      <p className="step_four_item_title">
                        Приложение для создания 2FA-кодов
                      </p>
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#2D9CDB",
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "13px",
                          lineHeight: "15px",
                        }}
                      >
                        резервные коды доступа
                      </a>
                    </div>
                  </div>
                  <i
                    className="fa-regular fa-star"
                    id="star1"
                    onClick={changeStarColor}
                  ></i>
                </div>

                <div className="step_four_item">
                  <div className="step_four_item_description">
                    <div className="step_four_icon_wrapper2">
                      <i
                        className="fa-regular fa-paper-plane"
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                        }}
                      ></i>
                    </div>{" "}
                    <div className="step_four_text">
                      <p className="step_four_item_title">
                        Приложение для создания 2FA-кодов
                      </p>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "13px",
                          lineHeight: "15px",
                          color: "#000000",
                        }}
                      >
                        Вы привязали Телеграм-аккаунт @serj_preobraj,{" "}
                        <a
                          href=""
                          style={{
                            textDecoration: "none",
                            color: "#2D9CDB",
                          }}
                        >
                          {" "}
                          привязать другой аккаунт{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                  <i
                    className="fa-regular fa-star"
                    id="star2"
                    onClick={changeStarColor}
                  ></i>
                </div>
              </div>
            </div>
          )}

          {!localStorage.getItem("show") && (
            <>
              {/* step one *************************************** */}
              <div className="fa_toggle_container">
                <div className="fa_toggle_description">
                  <i className="fa-sharp fa-solid fa-shield-halved"></i>
                  <p className="fa_toggle_description_icon">
                    Двухфакторная аутентификация отключена
                  </p>
                </div>
                <button
                  className={
                    parsedStorageState && parsedStorageState.length > 0
                      ? "set_btn set_btn_disabled"
                      : "set_btn "
                  }
                  disabled={parsedStorageState && parsedStorageState.length > 0}
                  onClick={stepOne}
                >
                  Настроить
                </button>
              </div>
              {parsedStorageState && parsedStorageState.length >= 1 && (
                <div className="step_container">
                  <div className="step_header">
                    <div className="step_number">
                      {parsedStorageState &&
                        parsedStorageState.map(
                          (
                            stepOne: {
                              step: number;
                              checked: boolean;
                              isValid: boolean;
                            },
                            index: number
                          ) => {
                            if (index === 0 && stepOne.checked === false) {
                              return 1;
                            }
                            if (
                              index === 0 &&
                              stepOne.isValid === true &&
                              stepOne.checked === true
                            ) {
                              return (
                                <i
                                  key={index}
                                  className="fa-solid fa-check"
                                ></i>
                              );
                            }
                          }
                        )}
                    </div>
                    <p className="step_text">
                      Добавление Омнидеска в приложение
                    </p>
                  </div>

                  {parsedStorageState && parsedStorageState.length === 1 && (
                    <div className="step_body">
                      <p className="step_body_text">
                        Откройте мобильное приложение для создания кодов
                        двухфакторной аутентификации (к примеру,
                        <a href="" style={{ textDecoration: "none", color: '#2d9cdb'}}>
                          Google Authenticator, Microsoft Authenticator, Authy,
                          1Password, LastPass Authenticator
                        </a>
                        ), отсканируйте QR-код и укажите в поле шесть цифр из
                        приложения:
                      </p>
                      <img className="step_one_qr" src={QRcode} />
                      <div className="step_input_container">
                        <input
                          type="text"
                          className={
                            isValid
                              ? "step_input step_input_valid"
                              : "step_input"
                          }
                          min={6}
                          onChange={onChange}
                        />
                        {isValid
                          ? input !== "" && (
                              <i
                                className="fa-solid fa-circle-check"
                                style={{ color: "#6fcf97" }}
                              ></i>
                            )
                          : input !== "" && (
                              <i
                                className="fa-sharp fa-solid fa-circle-xmark"
                                style={{ color: "#FF0000" }}
                              ></i>
                            )}
                        {isValid && (
                          <button className="step_two_btn" onClick={stepTwo}>
                            Продолжить
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* step two**************************************** */}
              {parsedStorageState && parsedStorageState.length >= 2 && (
                <div className="step_container">
                  <div className="step_header">
                    <div className="step_number">
                      {parsedStorageState &&
                        parsedStorageState.map(
                          (
                            stepOne: {
                              step: number;
                              checked: boolean;
                              isValid: boolean;
                            },
                            index: number
                          ) => {
                            if (index === 1 && stepOne.checked === false) {
                              return 2;
                            }
                            if (
                              index === 1 &&
                              stepOne.isValid === true &&
                              stepOne.checked === true
                            ) {
                              return (
                                <i
                                  key={index}
                                  className="fa-solid fa-check"
                                ></i>
                              );
                            }
                          }
                        )}
                    </div>
                    <p className="step_text">
                      Сохранение резервных кодов доступа
                    </p>
                  </div>
                  {parsedStorageState && parsedStorageState.length === 2 && (
                    <div className="step_body">
                      <p className="step_body_text">
                        <strong>Очень важно</strong> сохранить нижеуказанные
                        одноразовые коды. Если потеряете смартфон или купите
                        новый, вы не сможете попасть в ваш аккаунт без этих
                        кодов. Скопируйте и сохраните их в надёжном месте:
                      </p>
                      <div className="step_grid_codes">
                        <span>2qqtu-jursc</span>
                        <span>htgn2-2cx62</span>
                        <span>s8uuf-bjuvg</span>
                        <span>lfkqe-aeoda</span>
                        <span>56uo0-2sgd8</span>
                        <span>l0nn8-77a5d</span>
                        <span>9uirs-rx47d</span>
                        <span>dvj8g-01tcc</span>
                        <span>v3oc5-8elim</span>
                        <span>fd65r-zqak4</span>
                      </div>
                      <div className="step_two_actions_container">
                        <span onClick={copyToClipboard}>
                          скопировать в буфер обмена
                        </span>
                        <span> скачать файл с кодами</span>
                      </div>
                      <div className="step_three_button_container">
                        <button
                          className="step_three_trigger"
                          onClick={stepThree}
                        >
                          Продолжить
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* step three**************************************** */}
              {parsedStorageState && parsedStorageState.length >= 3 && (
                <div className="step_container">
                  <div className="step_header">
                    <div className="step_number">
                      {parsedStorageState &&
                        parsedStorageState.map(
                          (
                            stepOne: {
                              step: number;
                              checked: boolean;
                              isValid: boolean;
                            },
                            index: number
                          ) => {
                            if (index === 2 && stepOne.checked === false) {
                              return 3;
                            }
                            if (
                              index === 2 &&
                              stepOne.isValid === true &&
                              stepOne.checked === true
                            ) {
                              return (
                                <i
                                  key={index}
                                  className="fa-solid fa-check"
                                ></i>
                              );
                            }
                          }
                        )}
                    </div>
                    <p className="step_text">
                      Настройка дополнительного способа для получения кодов
                    </p>
                  </div>
                  {parsedStorageState && parsedStorageState.length === 3 && (
                    <div className="step_body">
                      <p className="step_body_text">
                        В качестве дополнительного способа для получения кодов
                        используется{" "}
                        <a
                          href=""
                          style={{ textDecoration: "none", color: "#2d9cdb" }}
                        >
                          Телеграм
                        </a>
                        . Если этот способ покажется вам удобным, вы сможете
                        сделать его основым. Откройте Телеграм, найдите бота{" "}
                        <strong>@omnidesk_2fa_bot</strong>, отправьте в его
                        адрес следующий набор символов и укажите в поле шесть
                        цифр из ответа бота:
                      </p>
                      <div className="step_three_code">
                        <span>2lns-eafx-p7mx-btyn</span>
                      </div>
                      <div className="step_input_container">
                        <input
                          type="text"
                          className={
                            isValid
                              ? "step_input step_input_valid"
                              : "step_input"
                          }
                          min={6}
                          onChange={onChange}
                        />
                        {isValid
                          ? input !== "" && (
                              <i
                                className="fa-solid fa-circle-check"
                                style={{ color: "#6fcf97" }}
                              ></i>
                            )
                          : input !== "" && (
                              <i
                                className="fa-sharp fa-solid fa-circle-xmark"
                                style={{ color: "#FF0000" }}
                              ></i>
                            )}
                        {isValid && (
                          <button className="step_two_btn" onClick={stepFour}>
                            Продолжить
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {!separator ||
          (parsedStorageState.length === 4 && <div className="separator" />)}
      </div>{" "}
    </>
  );
};

export default TwoFa;
