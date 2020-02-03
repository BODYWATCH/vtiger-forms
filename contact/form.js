document.getElementById("vtigerWebForm").innerHTML = `
                    <form id="__vtigerWebForm" name="BW - Webform - Contact" action="https://bodywatch.od2.vtiger.com/modules/Webforms/capture.php" method="post" accept-charset="utf-8" enctype="multipart/form-data"><input type="hidden" name="__vtrftk" value="sid:7e28cf67a14f460466de837cb0a8af01902032ba,1580715427">
                        <input type="hidden" name="publicid" value="c4b0cab9b2fb3e3be4fdcf6ae15d085e">
                        <input type="hidden" name="urlencodeenable" value="1">
                        <input type="hidden" name="name" value="BW - Webform - Contact">
                         <input type="hidden" name="__vtCurrency" value="1">
                                                <table>
                                                                                                                                                            								                                <tbody><tr>
                                									<td>
										<label>
																																																								Last Name
											*										</label>
									</td>
								                                <td>
									                                                                                                                                                                                                                                    <input type="text" name="lastname" maxlength="80" data-label="" value="" required="">                                                                    </td></tr>
                                                                                                                                                            								                                <tr>
                                									<td>
										<label>
																																																								Lifecycle Stage
											*										</label>
									</td>
								                                <td>
									                                                                                                                                                                                                                                                										                                                                                                                                                                                                                                        																				                                        <select name="contacttype" data-label="contacttype" required="">
                                            <option value="">Select Value</option>
                                                                                            <option value="Lead">
                                                                                                    Lead
                                                                                                </option>
                                                                                            <option value="Marketing Qualified Lead">
                                                                                                    Marketing Qualified Lead
                                                                                                </option>
                                                                                            <option value="Sales Qualified Lead">
                                                                                                    Sales Qualified Lead
                                                                                                </option>
                                                                                            <option value="Customer">
                                                                                                    Customer
                                                                                                </option>
                                                                                            <option value="Competitor">
                                                                                                    Competitor
                                                                                                </option>
                                                                                            <option value="Partner">
                                                                                                    Partner
                                                                                                </option>
                                                                                            <option value="Analyst">
                                                                                                    Analyst
                                                                                                </option>
                                                                                            <option value="Vendor">
                                                                                                    Vendor
                                                                                                </option>
                                                                                            <option value="Others">
                                                                                                    Others
                                                                                                </option>
                                                                                            <option value="Anonymous">
                                                                                                    Anonymous
                                                                                                </option>
                                                                                    </select>

                                                                    </td></tr>
                                                                                                                                                            								                                <tr>
                                									<td>
										<label>
																																																								First Name
											*										</label>
									</td>
								                                <td>
									                                                                                                                                                                                                                                    <input type="text" name="firstname" maxlength="40" data-label="" value="" required="">                                                                    </td></tr>
                                                                                                                                                            								                                <tr>
                                									<td>
										<label>
																																																								Mobile Phone
											*										</label>
									</td>
								                                <td>
									                                                                                                                                                                                                                                    <input type="text" name="mobile" maxlength="50" data-label="" value="" required="">                                                                    </td></tr>
                                                                                                                                                            								                                <tr>
                                									<td>
										<label>
																																																								Organization Name
											*										</label>
									</td>
								                                <td>
									                                                                                                                                                                                                                                                                                            <input type="text" name="account_id" data-label="" value="" required=""> 
                                                                                                            </td></tr>
                                                                                </tbody></table>
                                                <input type="submit" value="Submit" id="vtigerFormSubmitBtn">
                    </form>
`;