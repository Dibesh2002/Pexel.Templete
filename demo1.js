function addSubscriber() {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let phone = document.querySelector('input[name="phone"]').value;

    let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    subscribers.push({ name: name, email: email, phone:phone });
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    alert('Thank you for subscribing!');
  }
  