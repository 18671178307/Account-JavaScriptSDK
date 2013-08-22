describe('Account', function () {
    var Account = window.SnapPea.Account;

    var userInfo = {
    };
    var userInfo2 = {
        username : 'a'
    };
    var userInfo3 = {
        password : 'b'
    };
    var userInfo4 = {
        username : 'a',
        password : 'b'
    };
    var userInfo5 = {
        username : 'test@gmail.com',
        password : 'testgmail'
    };

    describe('Account.loginAsync()', function () {
        it('Should faild when misssing params. ', function (done) {
            Account.loginAsync(userInfo).done(function () {
                done('Should faild when misssing params. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when misssing password. ', function (done) {
            Account.loginAsync(userInfo2).done(function () {
                done('Should faild when misssing password. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when misssing username. ', function (done) {
            Account.loginAsync(userInfo3).done(function () {
                done('Should faild when misssing username. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when username or password is incorrect. ', function (done) {
            Account.loginAsync(userInfo4).done(function () {
                done('Should faild when username or password is wrong. ');
            }).fail(function (resp) {
                if (resp.error === 1010) {
                    done();
                }
            });
        });

        it('Should pass when username and password are correct. ', function (done) {
            Account.loginAsync(userInfo5).done(function () {
                done();
            }).fail(function (resp) {
                done('Should faild when username or password are correct. ');
            });
        });

        it('Should have the username "test@gmail.com". ', function (done) {
            if (Account.getUserInfo().username === 'test@gmail.com') {
                done();
            } else {
                done('Should have the username "test@gmail.com". ');
            }
        });
    });

    describe('Account.logoutAsync()', function () {
        it('Should pass anyway. ', function (done) {
            Account.logoutAsync().done(function () {
                done();
            }).fail(function (resp) {
                done('Should pass anyway. ');
            });
        });

        it('Should not have user info. ', function (done) {
            if (Account.getUserInfo() === undefined) {
                done();
            } else {
                done('Should not have user info. ');
            }
        });
    });

    describe('Account.isLogined()', function () {
        it('Should return true when login. ', function (done) {
            Account.loginAsync(userInfo5).done(function () {
                if (Account.isLogined()) {
                    done();
                } else {
                    done('Should return true when logined. ');
                }
            });
        });

        it('Should return false when logout. ', function (done) {
            Account.logoutAsync().done(function () {
                if (Account.isLogined()) {
                    done('Should return false when logout. ');
                } else {
                    done();
                }
            });
        });
    });

    describe('Account.isEmail()', function () {
        it('Should return true: ivanzhaowy@gmail.com', function (done) {
            if (Account.isEmail('ivanzhaowy@gmail.com') === true) {
                done();
            } else {
                done('Should return true: ivanzhaowy@gmail.com');
            }
        });


        it('Should return true: wangye.zhao@gmail.com ', function (done) {
            if (Account.isEmail('wangye.zhao@gmail.com') === true) {
                done();
            } else {
                done('Should return true: wangye.zhao@gmail.com');
            }
        });

        it('Should return false: ivanzhaowy@gmail ', function (done) {
            if (Account.isEmail('ivanzhaowy@gmail') === false) {
                done();
            } else {
                done('Should return true: ivanzhaowy@gmail');
            }
        });

        it('Should return false: ivanzhaowy', function (done) {
            if (Account.isEmail('ivanzhaowy') === false) {
                done();
            } else {
                done('Should return true: ivanzhaowy');
            }
        });
    });

    describe('Account.isPhoneNumber()', function () {
        it('Should return false: 1234567890', function (done) {
            if (Account.isPhoneNumber('1234567890') === false) {
                done();
            } else {
                done('Should return false: 1234567890');
            }
        });

        it('Should return true: 13466770014', function (done) {
            if (Account.isPhoneNumber('13466770014') === true) {
                done();
            } else {
                done('Should return true: 13466770014');
            }
        });

        it('Should return false: 一三四六六七七零零一四', function (done) {
            if (Account.isPhoneNumber('一三四六六七七零零一四') === false) {
                done();
            } else {
                done('Should return false: 一三四六六七七零零一四');
            }
        });
    });

    describe('Account.regAsync()', function () {
        it('Should faild when misssing params. ', function (done) {
            Account.regAsync(userInfo).done(function () {
                done('Should faild when misssing params. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when misssing password. ', function (done) {
            Account.regAsync(userInfo2).done(function () {
                done('Should faild when misssing password. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when misssing username. ', function (done) {
            Account.regAsync(userInfo3).done(function () {
                done('Should faild when misssing username. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when user exist. ', function (done) {
            Account.regAsync(userInfo5).done(function (resp) {
                done('Should faild when user exist. ');
            }).fail(function (resp) {
                done();
            });
        });

        var username = 'zwy-wdj-test' + new Date().getTime() + '@gmail.com';
        it('Should pass when have username and password. ', function (done) {
            Account.regAsync({
                username : username,
                password : new Date().getTime()
            }).done(function () {
                done();
            }).fail(function (resp) {
                done('Should pass when have username and password. ');
            });
        });

        it('Should have the username ' + username + '. ', function (done) {
            if (Account.getUserInfo().username === username) {
                done();
            } else {
                done('Should have the username ' + username + '. ');
            }
        });
    });

    describe('Account.checkUsernameAsync()', function () {
        it('Should faild when misssing params. ', function (done) {
            Account.checkUsernameAsync().done(function () {
                done('Should faild when misssing params. ');
            }).fail(function (resp) {
                if (resp.error === -2) {
                    done();
                }
            });
        });

        it('Should faild when username already exist. ', function (done) {
            Account.checkUsernameAsync('test@gmail.com').done(function (resp) {
                if (resp === 'true') {
                    done();
                } else {
                    done('Should faild when username already exist. ');
                }
            }).fail(function (resp) {
                done('Should faild when username already exist. ');
            });
        });

        it('Should pass when username is fucking new. ', function (done) {
            Account.checkUsernameAsync(new Date().getTime() + '@gmail.com').done(function (resp) {
                if (resp === 'false') {
                    done();
                } else {
                    done('Should pass when username is fucking new. ');
                }
            }).fail(function (resp) {
                done('Should faild when username already exist. ');
            });
        });
    });

    describe('Account.checkUserLoginAsync()', function () {
        it('Should return true when logined. ', function (done) {
            Account.loginAsync(userInfo5).done(function () {
                Account.checkUserLoginAsync().done(function (resp) {
                    if (resp) {
                        done();
                    } else {
                        done('Should return true when logined. ');
                    }
                }).fail(function () {
                    done('Should return true when logined. ');
                });
            });
        });

        it('Should return false when logout. ', function (done) {
            Account.logoutAsync(userInfo5).done(function () {
                Account.checkUserLoginAsync().done(function (resp) {
                    if (!resp) {
                        done();
                    } else {
                        done('Should return true when logined. ');
                    }
                }).fail(function () {
                    done();
                });
            });
        });
    });
});
