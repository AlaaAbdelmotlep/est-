const token = localStorage.getItem("token");
let src;
let idSrc;

fetch("http://localhost:8080/profile", {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.Error) {
      localStorage.clear();
    } else {
      const studentImg = document.getElementsByClassName("student_img");
      const studentName = document.getElementsByClassName("student_name");

      // id
      const englishName = document.getElementById("english_name");
      const arabicName = document.getElementById("arabic_name");
      const birthDate = document.getElementById("birth_date");
      const phoneNum = document.getElementById("phone");
      const landline = document.getElementById("landline");
      const idNum = document.getElementById("id.number");

      const parentName = document.getElementById("parentalInfo[0].name");
      const parentEmail = document.getElementById("parentalInfo[0].email");
      const parentRelation = document.getElementById(
        "mui-component-select-parentalInfo[0].relation"
      );

      const schoolName = document.getElementById(
        "mui-component-select-education.school"
      );
      const grade = document.getElementById(
        "mui-component-select-education.grade"
      );
      const greadYear = document.getElementById(
        "mui-component-select-education.schoolGraduationDate"
      );

      // class
      const gender = document.getElementsByClassName("gender");
      const nationalId = document.getElementsByClassName("national_id");
      const passportNum = document.getElementsByClassName("passport_num");
      const EmailAddress = document.getElementsByClassName("email_address");
      const nationality = document.getElementsByClassName("nationality");
      const city = document.getElementsByClassName("city");
      const address = document.getElementsByClassName("address");
      const idCopy = document.getElementsByClassName("id_copy");

      const nickName = document.getElementsByClassName("student-nick-name");

      if (data.retagProfile) {
        src = "../assist/images/retag_img.jpeg";
        idSrc = "../assist/images/retag_id.jpg";

        for (let i = 0; i < nickName.length; i++) {
          nickName[i].innerHTML = data.retagProfile.retagPersonalInfo.NickName;
        }

        for (let i = 0; i < studentImg.length; i++) {
          studentImg[i].src = src;
          studentImg[i].data = src;
        }

        for (let i = 0; i < studentName.length; i++) {
          studentName[i].innerHTML =
            data.retagProfile.retagPersonalInfo.EnglishName;
        }

        for (let i = 0; i < gender.length; i++) {
          gender[i].innerHTML = data.retagProfile.retagPersonalInfo.Gender;
        }

        for (let i = 0; i < nationalId.length; i++) {
          nationalId[i].innerHTML =
            data.retagProfile.retagPersonalInfo.NationalIDNumber;
        }

        for (let i = 0; i < passportNum.length; i++) {
          passportNum[i].innerHTML =
            data.retagProfile.retagPersonalInfo.PassportNumber;
        }

        for (let i = 0; i < EmailAddress.length; i++) {
          EmailAddress[i].innerHTML =
            data.retagProfile.retagPersonalInfo.EmailAddress;
        }

        for (let i = 0; i < nationality.length; i++) {
          nationality[i].innerHTML =
            data.retagProfile.retagPersonalInfo.Nationality;
        }
        for (let i = 0; i < city.length; i++) {
          city[i].value = data.retagProfile.retagPersonalInfo.CountryCity;
        }
        for (let i = 0; i < address.length; i++) {
          address[i].value = data.retagProfile.retagPersonalInfo.Address1;
        }

        for (let i = 0; i < idCopy.length; i++) {
          idCopy[i].data = idSrc;
        }

        englishName.innerHTML = data.retagProfile.retagPersonalInfo.EnglishName;
        arabicName.innerHTML = data.retagProfile.retagPersonalInfo.ArabicName;
        birthDate.innerHTML = data.retagProfile.retagPersonalInfo.DateOfBirth;
        phoneNum.value = data.retagProfile.retagPersonalInfo.MobileNumber;
        landline.placeholder = data.retagProfile.retagPersonalInfo.Landline;
        idNum.value = data.retagProfile.retagPersonalInfo.NationalIDNumber;

        parentName.value = data.retagProfile.retagParentInformation.Name;
        parentEmail.value = data.retagProfile.retagParentInformation.Email;
        parentRelation.innerHTML =
          data.retagProfile.retagParentInformation.Relationship;

        schoolName.innerHTML =
          data.retagProfile.retagSchoolInformation.SchoolName;
        grade.innerHTML = data.retagProfile.retagSchoolInformation.Grade;
        greadYear.innerHTML =
          data.retagProfile.retagSchoolInformation.YearOfGraduation;
      }
      if (data.amrProfile) {
        src = "../assist/images/amr-img.jpeg";

        for (let i = 0; i < nickName.length; i++) {
          nickName[i].innerHTML = data.amrProfile.amrpersonalInfo.NickName;
        }

        for (let i = 0; i < studentImg.length; i++) {
          studentImg[i].src = src;
          studentImg[i].data = src;
        }

        for (let i = 0; i < studentName.length; i++) {
          studentName[i].innerHTML =
            data.amrProfile.amrpersonalInfo.EnglishName;
        }

        for (let i = 0; i < gender.length; i++) {
          gender[i].innerHTML = data.amrProfile.amrpersonalInfo.Gender;
        }

        for (let i = 0; i < nationalId.length; i++) {
          nationalId[i].innerHTML =
            data.amrProfile.amrpersonalInfo.NationalIDNumber;
        }

        for (let i = 0; i < passportNum.length; i++) {
          passportNum[i].innerHTML =
            data.amrProfile.amrpersonalInfo.PassportNumber;
        }

        for (let i = 0; i < EmailAddress.length; i++) {
          EmailAddress[i].innerHTML =
            data.amrProfile.amrpersonalInfo.EmailAddress;
        }

        for (let i = 0; i < nationality.length; i++) {
          nationality[i].innerHTML =
            data.amrProfile.amrpersonalInfo.Nationality;
        }
        for (let i = 0; i < city.length; i++) {
          city[i].value = data.amrProfile.amrpersonalInfo.CountryCity;
        }
        for (let i = 0; i < address.length; i++) {
          address[i].value = data.amrProfile.amrpersonalInfo.Address1;
        }

        for (let i = 0; i < idCopy.length; i++) {
          idCopy[i].data = idSrc;
        }

        englishName.innerHTML = data.amrProfile.amrpersonalInfo.EnglishName;
        arabicName.innerHTML = data.amrProfile.amrpersonalInfo.ArabicName;
        birthDate.innerHTML = data.amrProfile.amrpersonalInfo.DateOfBirth;
        phoneNum.value = data.amrProfile.amrpersonalInfo.MobileNumber;
        landline.placeholder = data.amrProfile.amrpersonalInfo.Landline;
        idNum.value = data.amrProfile.amrpersonalInfo.NationalIDNumber;

        parentName.value = data.amrProfile.amrParentInformation.Name;
        parentEmail.value = data.amrProfile.amrParentInformation.Email;
        parentRelation.innerHTML =
          data.amrProfile.amrParentInformation.Relationship;

        schoolName.innerHTML = data.amrProfile.amrSchoolInformation.SchoolName;
        grade.innerHTML = data.amrProfile.amrSchoolInformation.Grade;
        greadYear.innerHTML =
          data.amrProfile.amrSchoolInformation.YearOfGraduation;
      }
    }
  });
