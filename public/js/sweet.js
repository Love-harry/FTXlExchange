function withdraw() {
    (async () => {

        const ipAPI = 'value'

        const inputValue = fetch(ipAPI)
            .then(response => response.json())
            .then(data => data.ip)

        const { value: ipAddress } = await Swal.fire({
            title: 'Enter amount to withdraw',
            input: 'text',
            inputLabel: 'withdrawal request',
            inputValue: inputValue,
            inputPlaceholder: 'USD',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something! or cancle'
                }
            }
        })

        if (ipAddress) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: `Your request to withdraw $${ipAddress} has been sent, you'll recive an email to complete your request.`,
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    })()
};