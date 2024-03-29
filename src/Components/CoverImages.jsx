import { Box, styled } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({
    // border: "2px solid red",
    cursor:'pointer',
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImgBox = styled(Box)(({ theme }) => ({
    // border: "2px solid red",
    cursor:'pointer',
    width:"100%",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:"none",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImgBoxSecond = styled(Box)(({ theme }) => ({
    // border: "2px solid red",
    cursor:'pointer',
    width:"100%",
    display:"none",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:"flex",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function CoverImages() {


        const navigate=useNavigate()
        const [image,setImage]=useState(1)
        const [imageSecond,setImageSecond]=useState(1)
    
   
    
    let allImages = ["https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-a03148dc-17d3-4cbb-98ba-59237b7229f0-default_0.jpg?ts=1701338880413",
    "https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-dresses/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-62aa6aca-9292-45f7-9a41-0d566002349c-default_0.jpg?ts=1701340105640",
    "https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-tops/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-3b34b431-c5cd-423b-b44f-895d37d56726-default_0.jpg?ts=1701339240205",
    'https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-beauty/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-58ebd829-a488-4cea-8d0d-4bde66416b46-default_0.jpg?ts=1701339675676',
    
    ]


    let SecondImage = ["data:image/jpeg;base64,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",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D3442093242565395&tbnid=1XSx0wrA61iEPM&vet=12ahUKEwijj8K72dSDAxV8v2MGHRBJBL8QMygQegQIARB9..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2F2135034319937967%2Fposts%2Fdress-with-shoulder-padsref-0219441700-149000-mkd-long-dress-with-a-round-neckli%2F3442093319232054%2F&docid=g6tlzSQwKBPrRM&w=1440&h=1797&q=zara%20landscape%20dress%20pic&ved=2ahUKEwijj8K72dSDAxV8v2MGHRBJBL8QMygQegQIARB9",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUZGRgYGhkcGhwYGBoYGhocGhweHBgZGBwcIS4lHCErIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NjQ0NDQ0NDQxNDE0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBQYEB//EAEAQAAEDAgMFBQYEBAQHAQAAAAEAAhEDIQQSMQVBUWFxIoGRobEGMkLB0fATUmJygrLh8RRDksIHFRYjU4OiM//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgIBBAMBAAAAAAAAAAABAhEhMQMSQRMiUWEEMnGB/9oADAMBAAIRAxEAPwC0KjcjKArtOFguQEIyhchCIyhKkKBwTJAcgKNyAqhAFCUZQQmIEpiiKZAAEJijIQlBIyFEkqAAhMiTIAaEk6ZACSSSQSJJJJAGiKAhSEISsTqIyhIRlCUEgEKMqRyBwTJAKjKkcEBVCAITQiKGECBKYhTNpkoarYIABJObSPhGYkydEpSjHbKjCUtIiIQqRrQfdc11p7Lg60wdNYOscUxanGSlomUXF5RHCaEcISmSMklCaFQDJkUJkAMmhFCUIAZJOkgk0RQORplgdRGUBUjggKZLIyhcEZKApkgOQkIyEJCYAFMGoyF1YOhmcN8XPdfvSlJRVscIOTpA/iMoszvFzOQb4Aku6aeKotqbYa6zWR2B0l5uB1BEni3kuna1dtSqXvdLAA0NGpkwAI3Gd0WM/Dehx9fO9zsuUGzQLTFgI5A35yuDt3lbPR69I0jhNRwghxBI3GN87lpNm7R/FbDozt948f1d+/msvUdJ8hyC69k4jJUaeMt8f6wumDpnPNWjUEIYRl03G9DC6TiYMJkRCaECBIShFCZUAyaEUJQgBkk8JIJNAQmIRFMVgdRGUBUhCAhMRGUJCMoSEEkZTQpCE2VMQDW3U2PxTqFLs+++w3kDeRxSY4NDnuEhu7idwKrm131ahe+wYCQLgW4jnYAcGlcv5M6XU7fxeO/cQ18I2hT/ABKl3iXAHe9whgI4AEu7xpInMh/xa2Mk8xc36+SsNsY1+IfkGgJtPPtuPeJnkFU1DuH39/NZ8ccZ2a8ks4BqNgxr/aSO7TuQhO9INWqMGarZuID2CDff13rrIVbsOjDJ4yfQf7VaOC64vBxyVN0AQmhFCaEyBk0IoTIAZKE8J4QAEJI4TKgL8hMQjcEBC5zoAKAhSEISFQEZCEhSEISEEgQmIREImNkgc0WKiDEYtlNpgZnxMGIAERPGSRbgCqiq9zKD3uIzVCDJJJEmx5uNzyy8mw/tJDQ4R2yZdB0bZrR32twEqkxmdzznJGTjFp4DjEeXBcD98rZ6aS440jgzkcp16cEmyZPC/nH30T1om2n3KCfNbGD2MpaNjPBRwut1P3Ryk95+gCHKhxhZb7Jxzf8A84IEnLPA7j3z3K4IWQpWcCOIWwhdHFLsjm54KLwRkJiEZCaFqc4EJQihIhAgYShFCUIAEhOnhJAF+QgIUpCAhYnURkIYUkIUyQCEJCMhNCYiOEVN0EG6eE0JAsGb21i89XI73QWuPEmBlaZtl/rvKosTWc95c68mTHP78l3beM13zxA8AIUuAwBytebh0juGYeseK40lHJ6Ld4KJwTkfJWLsO5mZn5t+4A6zzT18JHaAt07lXdGfU4GNmy7cRTc0SRYhjenZAg8NCrbBUS05oA7IFgO8lQbbHZZEXseJi4uo7WzRRpFfRbLmjmPVa1wWSwx7bP3N9Qti4Lp4PJyflbRCQmhSEISF0HJQMJoRwlCAAhKEcJoQIGEkUJkwL4hCpSEBC5zpIyEJClIQkJgREISFKQhhMkCEoRQkWmDBAgEydBAmTyCHKlY4q2kYfbRnEVP3ELS0sNFBg/K1p8dfMrKYiH1HZC5zS7sl3vO3SeBOsc1va9HLh3E7yxg42GYx4DxXMtP+HbPx/Skr0QWzN+Y6fVRClaZFuuqmfIad4ym3coGVJLhzHqs6HZ0upRaeA371UbXYTP6b9yuH1O3pw8VUbSLu0eIcPFCTsbaoqWPgg8CD4Lcm+m9YFa/YWJz0gDqzsnoPd8o8F08Tp0cvOrSZ2EISFMWoYXQclEUJQjhLKiwAhKFJCbKiwoCElJlSRYUXZCEhSkISFidNERCYhSEISEEkZCGFIQmyp2KgIVdt7EZKD41f2B/Fr5BWsLOe1r7U2cS5x7oA9So5H7TXhjckcHs1g878x0Zfv3LUbbfDWM/KzMf3Pv6ZVzez+EyUgSPe7R6f2XTj6Wem+q6cznkAboDR9QO5ZLCX2byzJ/WCmxNqZPT5fRcdF0v/AHEerb+ZVvtXD5aLDxAJnqflCqxSLTSJ1Jv3kH5I2B04ixn9TfULnxtOT1+kj5rrxYt3j1UWIEgHkD4KWUjLPZBI4fYVv7L1YqOZ+Zs97f6EqHaOG1e0aCT0O/uPqoNlVslZjjpmAPR3ZPqrg6aInG4tG0LUJapy1CWrqs4GiKE0KTKllRYqI8qWVSZUsqB0BCSOEkWKi6IQkKSE0LE6SIhDClITEJ2KiKE2VSkJoRYUR5Vl9sM/FxTWD4WtB5E9o+RC1rWyYWc2M3NXe83zPflPESYI5QsuV3UTfhVXL4RocMwSGgcPBvaP8sd6HalOKYbxk/6nGPIBdGEFnu/a0d8uP8oUW1jGT/1+Quok7ZcFSOT2op9kDhlHdCzTnlz2AxYjTrHyWn9obtJ/b8ll2e+Oo/mRHQ2deN0H7gouHeF04gLnczs9CgZHTaMzZEicrv2u7J9VntoYU03uYfhNjxG4+C0Lx5ovayk0sp1d57PUFpcPAg+JVJWiG6a+yx2PifxKLHkyYh3Vtj46966y1Zz2QxIl9I7+230d/t8CtTC3jK0ck41JkJahyqYtTEK7JojhKFIWpZUWFEcJI4TosKLchCQpSEJCxs3ojLUJapS1MQixURQmhSwmITsVFTtuuWsDGmHVDl55fiy+Q/iXHsTDFtR4JBLIb2dASNB0uF17c2c6oGPYe2ySBMBwMSJ3Gwj7K69j4UAA5XNc9+Z4cZIcTcTw18Vi43O2dKklxUtlvi6Ya0tHEeTSFXbdb2m8A4hW1e7v4m+pVVtnSeZUWUji22ezHJvoFmGAZxG9zfXXyWi2070b/KFncvaaeDm8dCf7KoiZYYnVQuNipq2qhfokMhedOhXTtannwTHfkynwJYfVcdbQKbFY+mzBBj7ufmytBg2eTmPAAjv0Vx8mc/DMvQquY9r2mHNII68D9Focf7UuBb+E1sZWl2aTcgEtEG0aTx6LO4eo6Dl3tcD3iCBzifFc+aVUW0TNRdHqVB4exrho5ocOhAI9UWVNhaORjGflY1vgAFIWrWznojypQjIShOxUBCSOE6LCiydUbMZmydBIk9yKFg3AF3+U86z2Q6eZbBHWL8kZe6k7OxrwXWJa4u8nfdlyLkOx8RuCEJaqPCbaeMv4pZkgy8ksfI3lpEHhZWjNp0XaVG95j16q1JMhwaJ4TZUTqjAMxc2DoZEHoUD8UwCS9gH7hvVdieo5ajwze23qmF9FLhm9sd/oUN4BLJKffjv8CFWbTuw9Vav98fxDyKrMW2WOHJYHSis24y8Dl6KlLQ3U6xHUH+y0O1Wdo+PkqCqJeLaJp+BNB1NVFUFlLU1Ub9EwOKs6GnkFm8VUzO6W+Z8yfBXe0quVh5iO8qghXEiXwdFDMA3KCSC5xj8rQcx8Au7ZGCD8TTA90nP3N7RB8AO9TjZ7qeD/AB8xaXyzLudTf8yQT0hd/sJhsz3vOjGhg6uMn+XzVEPRsS1NlUuVMQrsyoiypZVJlSyp2FEeVJSZUkWFHkFOplII3fe5T0toVGElr3X4kn1XKnWbSZom0WLdtVfiLXDg5rfog/xzHEF9Jsje0lvkLLgSS6IfaRf0Np0xZr3sHAl2UdIJjvnomrYVtQE/ih5v70EW3ZxcajUb1QomuI0MdEunwyu/yjTbC2+7CnI8PdT3NJBLT+gmBHLT5772f2tSxDuwTIaXFrhDgNJjhJ1HFeSf458QYd+4B3iTdb3/AIZ4dpZWrBuUkhljaAA4wN3vN8Ah3WRKrwa9+88nedvmq99wRyXfiRaJ3gd32FXVBLw0HUx8lkbI5MfpP6W/yhUTR2itDtkdt0HSB4AKiaBM3TWxPRG/VRv0U74UFaI6o8gU+1MK57ezeLxxUOxdgPrvDXAsYLvJsY4NHEq8YxdmExraGZ7gSI+HXUQtVhGbyQ+29MijSYxhyh/wiwhuVjbdTHRWfsvs40KADxD3kvcOEwAD0AHfK4z7Xs/8bgdwJAJ4RZPgva5jn5HsLJ+IOzNH7rAhMjNGjhNCz2P9rabDDGOeePut8SFw/wDWZ/I3lDs3kCixUa+E2VYer7ZVQZDaZHANd65lzj20r/oP8PpdOwo9BhJYL/rWrrlZ0DTr1lJFioyqdMnQMZJKUkAJJJMUAEvVvYKlkwLXfne93/1k9GBeTyvaNlUjTwmHYdRTZPUtzHzJUT0VDZLXr2XNgDmqt5SUFV1k+AtndwbA7yPoskbkGPfJceJcVTNVliXWPT5qvhNCZFWNh1XM+5A6KfEagd6jpNl0qkJkzGIcRRzsczTM0jv3KQm4R71UmJIwtSnl91zHaTDo9YUJqOHLor/FPouc5jqZblJbIa3ncQJjvVds7ANfPbuB7rZmNLk6eaSljJLjnBXOquOpJSc8kR9nqtEzZDHA53Nba0xmniS0AkdYVbidjvZBD2OB3h0eR+Sa5IsUoSRWpLofgntElttZGhHEcV07EwT3vzNkBt80AgHcATafoqc0lZKi7o5aWBqO91jvCPCdU612NpYgCWAZubmyOM7pSWXqv6NfSj9mMTJI6DMzmtJgEgE8ATcrUyI0gVuP8WygzsNDDYBpBFjJGaATpEzxJVLjccyuYewF5tmaQ0DhDifW1lmuRvwaPjryUKddz9lPDczS14/Q4F0ccpg+AK4CFopJ6M2mthMZmIaNXEAd5j5r3HEtysA4WH34Lx32epZ8Vh28atOegeCfIFevYp8jvKiZcDieLJURDH8y0eqMNTYg5afV58gPqsjUrcQeyeoXCV2Vz2FxkqkDOer73d80+HbvTO1PcuvCUCQDFlosKyHlkdNhLtNLn76p3K+oUMuHJOtQz/C2w85Kzz3SSobsaRmts7OqOqOeyCHZbZoIsBeeYVlgtjtp2Ac9xBOYZW5IE6zI81NiK1MvyVHPbDM0sOW0mZ3nRdLKWHAyjO4OA7TpfY2taN6znJ6KjFXZwYak2sc0OeWGGmoWy4izjLR2gO8KLb+KdTaGMewE6houANwMWHgrfF02UcrRUDRIs5rOG4COS5cTVw7zD2nNYQWDNO6P6FSn7rrBTWKvJQbKrVqlVrA8/qzQ6GjXXuC0+PxQptgwBuDYB5lc2xmduo8UiwCwLmkEiSTci+5U23qz3vMw1kwJIM87XhN++VaRK9sb2NjNqT7pI6nnvKSrHsAsDPSwP1TLbpEz7sglWfs9hy6sH/CwZzwt7o6k+hVeyk5zg1rS5x0DRJPQBbjZ+yHU6AYGjO+HPLg0iSPdgn4fqnyzUVXyTxxbdmOxuIc97nuJJJOpJtwuoAtRtXZLnyTTLX/ma3svPMi3fZZmrTcwlrgWkagohJNYHKLTyO15BBGo07lNVxQf77cx/MDDvoe9coRd6ppEpsu/YqnOPo7wM7vCm8jzhel4uw71gf8Ah2zNjJ/LTqH+Vv8AuW9xbpJ+9FnN5NONEYqWUOJMt6H1AUbXoKlazm8x9+izs0Oasbdy4yuiq6y5immDI2NkkLSDCFoZT3m5/c6PQQO5UeDMVGcC4DzEea01TEZK2Zwm1uR4+qrtgisi2q4AZW6NblHcIWRfqtBj8UIJJEOMAzv4FUVcQZREb0ZTb7/+9Y3DWj1PzUuzdqAOaHAAiYIhszoHSYA5hV+0qmaq8/qI8LfJcy0cVJUzJSalaNjiMA17fxDTaXv7Rc9xe0lwsBB48Aq7CbYqUnmm6kP2tJjqCT81X7K2m6kYLnZDqAdOYBt3LSPwLMS1pmC0Sx7IaRN4dAIN4t10WDXXEso2T7ZWGdDjUqMIjIZ5AxxBBc0+Kp6myy8ySIGsXjz87Kq2oyrTqOY95JPxAwHDdMb+S5KVdzTIcYmTvnjZVHjaVxZL5FdNHbXyszDNJt8NhxidUlo8JjGy1o/DJy5j2Yielgb6JKfUfwV0XyWj8TSw7AymzssEEtiTxk6knWSqPFbWeKgeHADc2SHEO0D2m283H9Fnm454+KYiJAMRpE6ImYtznDO82NnWkchy5JrhrLyJ8ieEaurXxMB7Cx7CJhxALZ3HNbw5rjrYxjxkxFNmsAtM8zBbdvioNjY1rS+m53ZsWG8STpyHVdLthtIL8mYvnssdbS19Oe6+9RiLplZawUdbZwOZ1A52A6H3xxt8Xdfkq0rZYDZJDW5SAdHA6k79DHgVFifZntOiSXG0uDcus3IM3jh3rSPMrpmcuJ7RU+z2GrOqtdSDwLhzwXNaBvBcNd1uIC1ztqBjnNaHGDEEy5xAvEmB4oGYQ0aYLzlAHwPDS0aNEE31XG/Cfjtc5xqMaCcr3uAJgRdoEka6z14Zyl2lfg0jHqqLShjWOcWhwzDUb0dRyxX4L6bwym5lXMNGNkkG5kEaeKmxW2K7CGZWtIgZcpJGkRe+5X1vQu1bNPUdZc5qKTAUXvpZn2ePeJBaydYBJkxoTos4dum/YH+ox6JJXhFN0rL1r+G7RWu3ts0WBpc8ZyGuyN7TgHCe0B7veswytWYw1KrAxrgBTFy4vcREibDLmMWKpn0XPqgVDlNSCTEQDZtj0CpUQ7qzRv2k2qOzdszpe3pqoMXisjHPO4W67h4o8FsqnSkh7jMSCWDpePmuh9CmQJDXAn4r+DdDB3qO6TwV1bWTDF3EpSt5SA+BoA6AAfLn3JnYNhMZGuOhGVp3Rb6q/X+iPRfyYWV04HHvpOzMcRxG49QtY7YFJ1zTyzwJbHUTAUZ9lKRPvvB4NLXQOZP9U/Vi8MXpSWUU+JqMxIzF+WpaA/SSY98D3eokLo/5TRY3tuc93BpgdwEncrvDezmHZfI+p+8yP9LYBHWVeMBa2GZWtAgQ2I6BZS5KxFujRQvMlkyWycC4PLmUawsRfsiN13ROnHektc6q/SR1++idT2srqeTpFS4bDue4MYJJIHK/E7gr8ey4Dg11dsn8rJEzBElwFvHkuuU4x2zmjFy0UtGo34idINpiBYzPGFf7NxTndgzwHFwd7uh4Eea5MR7O1qJD2lrrwBIDj/C6x6Alc+0a9QHtsNN0CLFtwIseOvispVLRrG47L92Kp07S+oRmJaHCDuibzpIGa1uICkdtchuUMuQIYSc5O4tDyJEXta2qybq7jDWsJySZykkuPxG1hfQrqobRaSIpk1BIa5hfMEmbB0wATa/VQ+L/AEa5C6r13VCz/uZ3w95YGB2UNsIOYEEm415aI2Y12TM9+d4ADg4lpDnWaQLakaZhqLXVHidn1nvcWsqw4/5jHg6cb2UNHZ+JbGWi+xBEsPcb6I6xa2hdmno7sNWpNqirFRuvvE5dMse6dJmS6Nyu8FsmriX03lgFOM2d2UiDoG3BJvIsFy7GwNdxmox7A2Tc+84kGIuQJkmI0F1ZVNl1Hw2piXuZrla0M4kAmdFLkrLjHBbbYwrXU3Uc4Y0iAQ4C/wA+fFYLH7CewANP4j5MtY0ugfC63H7lbBmxaLP8sO0u9xeTG+8jwXS2GiGDKBuaA0X3wCOd0KTjotpNZK/ZlPPSpsqU3McwAy6DLhIJFyRbpEqv2hsarVxP4nZDBA1kgNFjGmvNX9V9pJJ5CMvjF0LQQRAInhYD7upUmnaBq1Rw/wDKGggPc5/HcB1tpHArqZs9jG9loDbWyye4uJt14ojVDZk9biw4kjd1UrINveJjUki/AKWx0cz6LJzlmbdrwMwQPoUbagc7K1gaDxJiem/ehrOIfGVoi24Ty16qT8O2YECd30SANrWSQ5xtv3dZGhXP+LEhu86wSTw0T1DPutIG/dPfvRTkEgARpJm54IATg+RBE23adJCarimsgveT+rcOV/khc17jJtxOQlw3ayom4Zrt+bLEZxx1JHFPAjpGKZlDjIkyCYAI00JlJQYnChoByiZjU+NuiSLHRn/Z/Cszst8LTYkXJubFamph2mQWiPDdySSVcn7GcdHJWohhAExO8lx8XElRbbeT2SZBIBBuDoN6SShbL8HO+oWUAGEtgxbWJjXXcurYDBlfUgZ3QC7eYCSST/V/0a2ixb80tw6/VMkso7RTCxFh079/NR5zMTvb80klsSRtqHSdHADpGi6G3A70kkDOXENiOhXJhqhc4gmRPz/okkn4EdGKsIFtdOqmfUIjoNwSSTA5KbyQJM338yuomGSkkpAVN5DCZ3Eea5jq373pJIQ2V239qVm1MrajgBFgrynVJyCdQJ5pJK5aRC2wXuME75SSSUlH/9k=",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qwLMJ2DQGRlKRTg3qvK-uR4n21uejXWUDQ&usqp=CAU',
    
    ]

    const handleScrollSecond=(event)=>{
    
      if (event.deltaY >= 3) {
          setImageSecond(1)
      }else{
          setImageSecond(image+1)
      } 
      if (event.deltaY <= 0) {
          setImageSecond(3) 
      }else{
          setImageSecond(image-1)
      }
  
}





    
    const handleScroll=(event)=>{
    
            if (event.deltaY >= 3) {
                setImage(1)
            }else{
                setImage(image+1)
            } 
            if (event.deltaY <= 0) {
                setImage(3) 
            }else{
                setImage(image-1)
            }
        
    }

  return (
    <OuterContainer>

<ImgBox as={"img"} onWheel={handleScroll} src={allImages[image]} />
{/* <ImgBoxSecond as={"img"} onWheel={handleScrollSecond} src={SecondImage[imageSecond]} /> */}

<ImgBoxSecond sx={{height:'100%'}} as={"img"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyW8zzPDY_50k322GAcZN_w9P79ZUHY2er9A&usqp=CAU"/>
    </OuterContainer>
  )
}

export default CoverImages