import React from 'react'

export default function Footer() {
  return (
    <section className="card-footer bg-transparent border-success">
        <div className="box-container">
            <div className="box">
                <h3>branch locations</h3>
                <a href="/">Kathmandu</a>
                <a href="/">Pokhara</a>
                <a href="/">Mustang</a>
                <a href="/">Lumbini</a>
            </div>
            <div className="box">
                <h3>quick links</h3>
                <a href="/">home</a>
                <a href="/">places</a>
                <a href="/">about us</a>
                <a href="/">gallery</a>
                <a href="/">review</a>
                <a href="/">contact us</a>
            </div>
            <div className="box">
                <h3>follow us</h3>
                <a href="/">facebook</a>
                <a href="/">instagram</a>
                <a href="/">twitter</a>
                <a href="/">linkedin</a>
            </div>
        </div>
        <h1 className="credit"> &copy; 2021 - <script>const d = new Date();document.write(d.getFullYear());</script> | Created by <span> ACME Students</span> | all rights reserved!</h1>
    </section>
  )
}
