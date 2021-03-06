
<template>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Payments Details</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">←<a href="index.html">Back to list</a></li>
                                <li class="breadcrumb-item active">Payments </li>
                            </ol>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid" role="main">
                    <div class="row">
                    
                        <div class="details col-md-6 mr-auto">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Customer Name:</td>
                                        <td>John</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Email:</td>
                                        <td>john@mail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Product/Service:</td>
                                        <td>French Lesson</td>
                                    </tr>
                                    <tr>
                                        <td>Date Processed:</td>
                                        <td>May. 31, 2019&nbsp; at &nbsp;11:30</td>
                                    </tr>
                                    <tr>
                                        <td>Amount:</td>
                                        <td>

                                            $20.00 &nbsp;<a href="javascript:;" id="refund_link">Refund?</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Original Amount:</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td> 0.00% paid:</td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Processor:</td>
                                        <td>
                                            <img src="/dist/img/stripe-logo.png">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Transaction ID:</td>
                                        <td>ch_FAXmNnnFBYfRDn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
    </template>